// @ts-check
const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

/** Custom overrides for folder names */
const CustomNames = {
	"type-aliases": "Types",
	"interfaces": "Types",
	"functions": "Functions",
	"classes": "Classes",
	"enumerations": "Enums",
	"variables": "Variables",
};

function getFilesFromDirectory(dirPath, dirPathBase = '', baseDir = '', topLevelComponents = {}) {
	const entries = fs.readdirSync(dirPath, { withFileTypes: true });
	const files = [];
	const categories = [];
  
	entries.forEach((entry) => {
		const fullPath = path.join(dirPath, entry.name);
		const relativePath = path.join(baseDir, entry.name);
	
		const categoryLabel = CustomNames[entry.name] || entry.name.charAt(0).toUpperCase() + entry.name.slice(1);
	
		if (entry.isDirectory()) {
	
			const category = {
				type: 'category',
				collapsed: true,
				label: categoryLabel,
				items: getFilesFromDirectory(fullPath, (dirPathBase || dirPath), relativePath, topLevelComponents),
			};
			// Check if category already exists
			const existingCategory = categories.find(c => c.label === categoryLabel);
	
			if (existingCategory) {
				existingCategory.items.push(...category.items);
			} 
			else {
				categories.push(category);
			}
		} 
		else if (entry.isFile() && (entry.name.endsWith('.md') || entry.name.endsWith('.mdx'))) {
	
			if (entry.name === "README.md") {
				/** Ignore auto generated README files. */
				return;
			}
	
			const filePath = (dirPathBase || dirPath) + relativePath.replace(/\.mdx?$/, '').replace(/\\\\|\\/g, '/');
			
			const fileContent = fs.readFileSync(fullPath, 'utf-8');
			const { data } = matter(fileContent);
	
			if (data.component) {
				const componentName = data.component;
		
				if (!topLevelComponents[componentName]) {
					topLevelComponents[componentName] = {
						type: 'category',
						collapsed: true,
						label: componentName,
						items: [],
					};
				}
				topLevelComponents[componentName].items.push(filePath);
			} 
			else {
				files.push(filePath);
			}
		}
	});
  
	// Filter out categories with no items
	const filteredCategories = categories.filter(category => category.items.length > 0);
  
	return [...files, ...filteredCategories];
}

function getFilesWithComponents(dirPath) {
	const topLevelComponents = {};
	const items = getFilesFromDirectory(path.join(__dirname, dirPath), dirPath.split("/").slice(1).join("/"), '', topLevelComponents);

	return [...Object.values(topLevelComponents), ...items];
}


const steamBrewClient = getFilesWithComponents('ui/developers/plugins/typescript/client/');
const steamBrewWebkit = getFilesWithComponents('ui/developers/plugins/typescript/webkit/');

module.exports = {
    homeSidebar: [
		"about",
		{
			type: 'category',
			label: 'User Documentation',
			collapsed: false,
			link: {
			type: 'generated-index',
			description:
				'A Guide to Getting Acquainted with Millennium.',
			slug: '/users',
			},
			items: [
				'users/installing',
				'users/getting-started',
				'users/trouble-shooting',
				'users/faq',
				'users/uninstalling'
			],
		},
		{
			type: 'category',
			label: 'Development',
			collapsed: true,
			link: {
				type: 'generated-index',
				description: "Let's learn about how to contribute to the Millennium community!",
				slug: '/developers',
			},
			items: [
				{
					type: 'category',
					label: 'Creating Themes',
					collapsed: true,
					link: {
					type: 'generated-index',
					description:
						"Creating themes for Millennium is a fun and rewarding experience. Let's get started!",
					slug: '/developers/themes',
					},
					items: [
					'developers/themes/getting-started',
					'developers/themes/making-themes',
					'developers/themes/dynamic-patching',
					'developers/themes/theme-colors',
					'developers/themes/tips-and-tricks',
					'developers/themes/publishing',
					],
				},
				{
					type: 'category',
					label: 'Creating Plugins',
					collapsed: true,
					link: {
						type: 'generated-index',
						description: "Creating plugins for Millennium is a fun and rewarding experience. Let's get started!",
						slug: '/developers/plugins',
					},
					items: [
						'developers/plugins/learn',
						'developers/plugins/packages',
						{
							type: 'category',
							label: 'Python Reference',
							collapsed: true,
							link: {
								type: 'generated-index',
								description: "Creating plugins for Millennium is a fun and rewarding experience. Let's get started!",
								slug: '/developers/plugins/python',
							},
							items: [
                                'developers/plugins/python/plugin-class',
								'developers/plugins/python/ready',
								'developers/plugins/python/steam-path',
								'developers/plugins/python/call-method',
								'developers/plugins/python/add-css',
								'developers/plugins/python/add-js',
								'developers/plugins/python/remove-module',
								'developers/plugins/python/set-setting',
								'developers/plugins/python/user-settings',
								'developers/plugins/python/version',
                                'developers/plugins/python/plugin-path'
							],
						},
						{
							type: 'category',
							label: 'TypeScript Reference',
							collapsed: true,
							link: {
								type: 'generated-index',
								description: "Creating plugins for Millennium is a fun and rewarding experience. Let's get started!",
								slug: '/developers/plugins/typescript',
							},
							items: [
								{
									type: 'category',
									label: '@steambrew/client',
									collapsed: true,
									link: {
										type: 'generated-index',
										description: "A plugin utility library for the client side of Steam.",
										slug: '/developers/plugins/typescript/client',
									},
									items: steamBrewClient,
								},
								{
									type: 'category',
									label: '@steambrew/webkit',
									collapsed: true,
									link: {
										type: 'generated-index',
										description: "A plugin utility library for the web/server side of Steam.",
										slug: '/developers/plugins/typescript/webkit',
									},
									items: steamBrewWebkit,
								}
							]
						}
					],
				}
			],
		}
    ]
};