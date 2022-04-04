/* eslint-disable import/order */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const fs = require('fs');
const { promisify } = require('util');
const fetch = require('node-fetch');
const OpenAPI = require('openapi-typescript-codegen');

(async function () {
	const format = 'yaml'; // yaml or json
	const groups = []; // groups Array
	// ex) swaggerURL/api-docs?group';
	const specURL = ''; // swagger or yaml

	const accessAsync = promisify(fs.access);
	const mkdirAsync = promisify(fs.mkdir);
	const writeFileAsync = promisify(fs.writeFile);

	const makeDirectory = async (path) => {
		try {
			await accessAsync(path);
		} catch (err) {
			if (err.code === 'ENOENT') {
				await mkdirAsync(path, { recursive: true });
			} else {
				throw err;
			}
		}
	};

	try {
		for (let group of groups) {
			const outputPath = path.resolve(
				path.join(__dirname, '..', `src/types/${group.toLowerCase()}`), // 생성될 파일 경로
			);

			const docFilePath = path.join(outputPath, `spec.${format}`);

			const response = await fetch(`${specURL}=${group}`);
			const data = await response.text();

			await makeDirectory(outputPath);
			await writeFileAsync(docFilePath, data);

			await OpenAPI.generate({
				input: docFilePath,
				output: outputPath,
				useOptions: true,
				useUnionTypes: true,
				exportServices: false,
				exportCore: false,
			});
		}
	} catch (error) {
		console.error(error);
	}
})();
