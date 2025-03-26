import { useEffect, useState } from 'react';

const PlatformIcon = () => {
	const Platform = Object.freeze({
		Windows: 'Windows',
		Linux: 'Linux',
		Unknown: 'Unknown',
		Unset: 'Unset',
	});

	const [platform, setPlatform] = useState<keyof typeof Platform>(Platform.Unset);

	const GetPlatformFromUserAgent = () => {
		const userAgent = navigator.userAgent.toLowerCase();
		if (userAgent.includes('windows')) return Platform.Windows;
		if (userAgent.includes('linux')) return Platform.Linux;

		return Platform.Unknown;
	};

	useEffect(() => {
		setPlatform(GetPlatformFromUserAgent());
	}, []);

	switch (platform) {
		case Platform.Windows:
			return (
				<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAtElEQVR4nO3XSwrCUBBE0bsSs/8laFyYGUUEISAZVD4FivfAm8UOqRr4GiTpWw3AHZiAecN5PT8Cl9Ks2H3jyz7PrTQrtjWttfQas2LzCacxK+YH0AkjZgN0wojZAJ0wYjZAJ4yYDdAJI3b0/vIozYqNJ94gz5wVG94/3HOHv67sA2fN0s8YXCkXrpTs4D8xnTBiNkAnjJgN0AkjZgN0wojZAJ0w/qeB6eALXSlZwnCllCQqngrjaGE/A2FKAAAAAElFTkSuQmCC" />
			);
		case Platform.Linux:
			return (
				<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAYAAADFeBvrAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE0klEQVR4nNWae4hWRRjGfymZl6ILUWEJIQupFbQblURUUGpKZhcoyD9CyhQvaSgVVFbYYlpG5mb3IoqM3cpqs9QKC1FXCwvtqtI97aKmWGvpul+88XwwDOfb75yzc3bHB17YOd/Zmfc5M/PeZqA4DACmAYuB94ClwBxgONCDQwjHAM8BB4BSBfkKuIxDAMcBWzogYrIL+ANoB2YSOV6qQsbkNuBcpz2GSHECsD8FoU+BzU77J6AvEWJMCjKV5DoixB0plbdZ3OM9e40I8YCU2wtsANYC+xylvwHuBmYDq4BfnN92EyEelXLnqT0Z2KlnP8sClnGhrJ07S/2JDA8DPwBnAtOBXo4Jv1ft+4Hr9f4HHqEziAxzgM+AF4HVwFigUbM0EbhGittSPF3kXEIDidAo/CZipmCD9kuDHOh0R/kLgIUeoRoiwwQpNhLYDmzSPjEjsQw4qN+bFMt97REaRWS4Voo/mcJ0G5nbvWfWjgqXyix3RMTM+AJgjQyF+9tKIsPZIrQgIdK29jOahR8VmJbJN2s5tgHHExEGaSndCMwH6oEHgXmajU9E4Evgaj239mj5JSM5hYgwXAqeIpPtB6oWDUxykrs6kdgG3KlZMgfcm0jwhhTvp7ZFDE8Ar2ipJS2ntxP22QwiwEgpY8sqC+oSCP3V3T5pAPA78DcwOMf/r08gZcFrT7oBhyuUMSXuydnHjAom/i66MWUwGdKJGW5LIGSm/ny6EBc74Uw5pHFThCx4q8IsbQaOoAvQS/6kPLB94deBs3L2d5H6+dP7SCVgFl2AcuT8D9AaqMa20onz3OSvtejUwvzMr8AXGtj2UQhc7pBYIiIliQW8heEWDfKRvH/efePDIojvnJk3p+zOkpXJgqOHih2WWu8A7gvcv5t6GCG3OmTxYGERwWpt3pMD9z/eIWAJYnlfmXwPHBZ4vP9PEKzzjaofhMY5XgjU5Fm82pCDnSTzvE9kLO8JjVMd5S2cavYITQ052DR1ulPHITdQzFFMWXk7U9rgEXos5GDNjgWyqHoE4dHTUf4RjeUSshJZMFgk8IIKiraXhhEeR0nxdvm3No+QZcDBYH7gaRXWa5SZFrHkzL+1AJ8D62RR14mQZcXB0oQ1zpfaolp0KFJDgRXAckXtfvq+SBmwEQ6CuQmR8Aotu6sC9P+U02+dF/ZsVUVpr0rLnUJv1QPaK4T3M2V5ZnXS6blHmTdr/1jqsEQ5UbnKmsv39QFuBd5JOJjy5V8tBfPirzoFkqxo9FKRZ1Xgr1dK4c5WZsyvQsIX27RX6O+WnMXCNzOMNzFr52lq075M0AyVcq7zZRnGasvq1P1zmzSyS5t5j6o4WfFhjjEbtD1S5ztZpUlW77SMBRI7/Po255gvF0mopLp2WoxW5lubUEdIK4+nGeihThBqTVEoGeoYgf0VqqfV5ICMV58sOU9eaVEEMVWHYONVhHxeh8olzwxfmaP/Wgq2cr7UpHxvuXxemnd3ADfluZrWT8cbH1e5ItaRDEn5XmOKU7+SUvEg6f6RwCVaMu97N0MqyVZ9lBGKwQYpEz1WBUp0WWmwwpqxVfqrL7Jw31dRQWMFcla4PzFHDrQtoS8zGBbXdRmOBsYp6bN02e4k5K1D23Ky+w2WRL6razZ2IyUz/gORQfsrf4w+tgAAAABJRU5ErkJggg==" />
			);
		default:
			return (
				<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAtElEQVR4nO3XSwrCUBBE0bsSs/8laFyYGUUEISAZVD4FivfAm8UOqRr4GiTpWw3AHZiAecN5PT8Cl9Ks2H3jyz7PrTQrtjWttfQas2LzCacxK+YH0AkjZgN0wojZAJ0wYjZAJ4yYDdAJI3b0/vIozYqNJ94gz5wVG94/3HOHv67sA2fN0s8YXCkXrpTs4D8xnTBiNkAnjJgN0AkjZgN0wojZAJ0w/qeB6eALXSlZwnCllCQqngrjaGE/A2FKAAAAAElFTkSuQmCC" />
			);
	}
};

export { PlatformIcon };
