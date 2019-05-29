export class Print {
    constructor(
       public machineNumber: number,
       public printFile: string,
       public isPrinting: boolean,
       public errorType: string,
       public successful: boolean,
       public unsuccessful: boolean,
       public printComment: string,
    ){}
}
