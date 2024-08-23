export const StartAnimation = () => {
    
    if (typeof window === 'undefined') {
        return
    }

    if (window.HAS_ANIMATED || document.getElementById('terrainCanvas') === null) {
        return
    }

    window.HAS_ANIMATED = true;


    let ShootingStar;

    let Star;
    let animate;
    let background;
    let backgroundContext;
    let displacement;
    let entities;
    let height;
    let i;
    let j;
    let mountains;
    let points;
    let power;
    let terrain;
    let terrainContext;
    let width;

    animate = () => {
        let entLen;
        backgroundContext.fillStyle = '#000';
        backgroundContext.fillRect(0, 0, width, height);
        backgroundContext.fillStyle = '#fff';
        backgroundContext.strokeStyle = '#fff';
        entLen = entities.length;
        while (entLen--) {
            entities[entLen].update();
        }
        return requestAnimationFrame(animate);
    };

    (() => {
        let requestAnimationFrame;
        requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || (callback => window.setTimeout(callback, 1000 / 60));
        return window.requestAnimationFrame = requestAnimationFrame;
    })();

    terrain = document.getElementById('terrainCanvas');
    background = document.getElementById('bgCanvas');
    terrainContext = terrain.getContext('2d');
    backgroundContext = background.getContext('2d');
    width = window.innerWidth;
    height = document.body.offsetHeight;

    height = Math.min(height, 400);

    terrain.width = background.width = width;
    terrain.height = background.height = height;
    points = [];
    displacement = 0;
    power = 2 ** Math.ceil(Math.log(width) / Math.log(2));
    points[0] = height - Math.random() * height / 2 - displacement;
    points[power] = height - Math.random() * height / 2 - displacement;
    i = 1;

    while (i < power) {
        j = power / i / 2;
        while (j < power) {
            points[j] = (points[j - power / i / 2] + points[j + power / i / 2]) / 2 + Math.floor(Math.random() * -displacement + displacement);
            j += power / i;
        }
        displacement *= 0.6;
        i *= 2;
    }

    terrainContext.beginPath();
    i = 0;

    while (i <= width) {
        if (i === 0) {
            terrainContext.moveTo(0, points[0]);
        } else if (points[i] !== void 0) {
            terrainContext.lineTo(i, points[i]);
        }
        i++;
    }

    terrainContext.lineTo(width, terrain.height);
    terrainContext.lineTo(0, terrain.height);
    terrainContext.lineTo(0, points[0]);
    backgroundContext.fillRect(0, 0, width, height);

    Star = function (options) {
        this.size = Math.random() * 2;
        this.speed = Math.random() * .1;
        this.x = options.x;
        return this.y = options.y;
    };

    Star.prototype.reset = function () {
        this.size = Math.random() * 2;
        this.speed = Math.random() * .1;
        this.x = width;
        return this.y = Math.random() * height;
    };

    Star.prototype.update = function () {
        this.x -= this.speed;
        if (this.x < 0) {
            return this.reset();
        } else {
            return backgroundContext.fillRect(this.x, this.y, this.size, this.size);
        }
    };

    ShootingStar = function () {
        return this.reset();
    };

    ShootingStar.prototype.reset = function () {
        this.x = Math.random() * width;
        this.y = 0;
        this.len = Math.random() * 80 + 10;
        this.speed = Math.random() * 10 + 6;
        this.size = Math.random() * 1 - 0.1;
        this.waitTime = new Date().getTime() + Math.random() * 3000 + 500;
        return this.active = false;
    };

    ShootingStar.prototype.update = function () {
        if (this.active) {
            this.size -= 0.15;
            this.x -= this.speed;
            this.y += this.speed;
            if (this.x < 0 || this.y >= height) {
                return this.reset();
            } else {
                backgroundContext.lineWidth = this.size;
                backgroundContext.beginPath();
                backgroundContext.moveTo(this.x, this.y);
                backgroundContext.lineTo(this.x + this.len, this.y - this.len);
                return backgroundContext.stroke();
            }
        } else {
            if (this.waitTime < new Date().getTime()) {
                return this.active = true;
            }
        }
    };

    entities = [];
    i = 0;

    while (i < height / 10) {
        entities.push(new Star({
            x: Math.random() * width,
            y: Math.random() * height   
        }));
        i++;
    }

    mountains = document.getElementsByClassName('landscapeItem');

    i = 0;
    while (i < mountains.length) {
        mountains[i].classList.add('animateIn');
        i++;
    }

    entities.push(new ShootingStar());
    entities.push(new ShootingStar());
    animate();

    setTimeout(() => {
        console.log("Done")
        document.body.style.overflow = "auto";
        document.documentElement.style.overflow = "auto";

        document.body.style.paddingRight = "0px";
        document.documentElement.style.paddingRight = "0px";

    }, 2500);
}