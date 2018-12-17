import { cs2ts } from "../extensions/CSharp2TS/src/extension";
import { ExtensionConfig } from "../extensions/CSharp2TS/src/config";

export class CSharpToTypescriptService {
    convertCSharpToTypescript(code: string, config: Partial<ExtensionConfig>): string {
        const mergedConfig = Object.assign({
            propertiesToCamelCase: false,
            trimPostfixes: [''],
            recursiveTrimPostfixes: false,
            ignoreInitializer: true,
            removeMethodBodies: true,
            removeConstructors: false,
            methodStyle: 'signature',
            byteArrayToString: true,
            dateToDateOrString: true,
            removeWithModifier: [],
            removeNameRegex: '',
            classToInterface: true,
            preserveModifiers: false
        } as ExtensionConfig, config)

        return cs2ts(code, mergedConfig)
    }
}