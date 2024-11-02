export class Tag{
    static readonly ANGULAR = new Tag('Angular', 'red');
    static readonly JAVA = new Tag('java', 'orange');
    static readonly PYTHON = new Tag('Python', 'blue');
    static readonly TYPESCRIPT = new Tag('TypeScript', 'cyan');
    static readonly CSHARP = new Tag('C#', 'green');
    static readonly NODEJS = new Tag('NodeJs', 'yellow');
    static readonly ASPNET = new Tag('ASP.NET', 'purple');
    static readonly JAVASCRIPT = new Tag('JavaScript', 'orange');
    static readonly REACT = new Tag('React', 'blue');
    static readonly LLVM = new Tag('LLVM', 'green');
    static readonly CPP = new Tag('C++', 'blue');
    static readonly GO = new Tag('Go', 'cyan');
    static readonly RUST = new Tag('Rust', 'brown');
    private constructor(private readonly key : string, public readonly color : string){


    }
    toString() {
        return this.key;
    }
}