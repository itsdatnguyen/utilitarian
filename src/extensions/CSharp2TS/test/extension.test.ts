//
// Note: This example test is leveraging the Mocha test framework.
// Please refer to their documentation on https://mochajs.org/ for help.
//

// The module 'assert' provides assertion methods from node
import * as assert from 'assert';

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
import * as extension from '../src/extension';
import { ExtensionConfig } from "../src/config";

// Defines a1 Mocha test suite to group tests of similar k1ind together
suite("Extension Tests", () => {
    test ("remove members test", () => {
        var config: ExtensionConfig = {
            propertiesToCamelCase: false,
            recursiveTrimPostfixes: false,
            trimPostfixes: [],
            ignoreInitializer: true,
            removeMethodBodies: true,
            removeConstructors: false,
            methodStyle: "signature",
            byteArrayToString: false,
            dateToDateOrString: false,
            removeWithModifier: ["private", "internal"],
            removeNameRegex: "_[a-z][a-zA-Z0-9]*",
            classToInterface: true,
            preserveModifiers: false
        };
        const testPairs: { inputs: string[], output: string }[] = [
            {
                inputs: ["int MyProp { get; set; }"],
                output: "MyProp: number;"
            }, {
                inputs: ["private int myField;"],
                output: ""
            }, {
                inputs: ["internal int myProp { get; set; }"],
                output: ""
            }, {
                inputs: ["string _myBackField;"],
                output: ""
            }, {
                inputs: ["string nonBackField;"],
                output: "nonBackField: string;"
            }
        ]

        for (const p of testPairs) {
            for (const input of p.inputs) {
                assert.equal(extension.cs2ts(input, config), p.output, input);
            }
        }
    })
    test("Auto property test", () => {
        var config: ExtensionConfig = {
            propertiesToCamelCase: false,
            recursiveTrimPostfixes: false,
            trimPostfixes: [],
            ignoreInitializer: true,
            removeMethodBodies: true,
            removeConstructors: false,
            methodStyle: "signature",
            byteArrayToString: false,
            dateToDateOrString: false,
            removeWithModifier: [],
            removeNameRegex: "",
            classToInterface: true,
            preserveModifiers: false
        };

        const testPairs: { inputs: string[], output: string }[] = [
            {
                inputs: ["int  Age  { get;   set;  }", "int Age {get;set;}", "int Age {get;set;}"],
                output: "Age: number;"
            },
            {
                inputs: ["MyClass<string, OtherClass<object, C2>> Generic { get; set; }"],
                output: "Generic: MyClass<string, OtherClass<any, C2>>;"
            },
            {
                inputs: ["MyClass<string[], OtherClass<object, C2>>[][] Generic { get; set; }"],
                output: "Generic: MyClass<string[], OtherClass<any, C2>>[][];"
            },
            {
                inputs: ["string[] names { get; set;}", "string  [] names { get; set;}", "string  [] names => rafa;"],
                output: "names: string[];"
            },
            {
                inputs: ["string[,][,,,] names { get; set;}"],
                output: "names: string[,][,,,];"
            },
            {
                inputs: ["List<string> List { get; set; }"],
                output: "List: string[];"
            },
            {
                inputs: ["int ? PropName { get; set; }"],
                output: "PropName: number | null;"
            },
            {
                inputs: ["int ? PropName { get; set; }"],
                output: "PropName: number | null;"
            },
            {
                inputs: ["Tuple<int, bool[]> PropName { get; set; }", "Tuple<int, List<bool>> PropName { get; set; }"],
                output: "PropName: { Item1: number, Item2: boolean[] };"
            },
            {
                inputs: ["Dictionary<string, Tuple<int, bool?, string>> PropName { get; set; }"],
                output: "PropName: { [key: string]: { Item1: number, Item2: boolean | null, Item3: string } };"
            },
            {
                inputs: ["Tuple<int, Dictionary<object, List<Tuple<int, bool?>>>> PropName { get; set; }", "Tuple<int, Dictionary<object, List<Tuple<int, bool?>>>> PropName => hello;"],
                output: "PropName: { Item1: number, Item2: { [key: string]: { Item1: number, Item2: boolean | null }[] } };"
            },
            {
                inputs: ["int? AñoMes { get; set; }"],
                output: "AñoMes: number | null;"
            }, {
                inputs: ["AñoMes MiFecha { get; set; }"],
                output: "MiFecha: AñoMes;"
            } , {
                inputs: ["public int Bar = 42;", "int Bar   =   42;", "int Bar=42;", "int Bar;"],
                output: "Bar: number;"
            }
        ];
        for (const p of testPairs) {
            for (const input of p.inputs) {
                assert.equal(extension.cs2ts(input, config), p.output, input);
            }
        }
    });
});