import {col, row} from '../utils'

export class Block{
    constructor(value, options){
        this.value = value;
        this.options = options;
    }

    toHTML(){
        throw new Error('Реализуйте метов toHTML');
    }
}

export class TitleBlock extends Block{
    constructor(value, options){
        super(value, options);
    }    

    toHTML(){
        const {tag, styles} = this.options;
        return row(col(
            `
            <${tag}>${this.value}</${tag}>
            `
        ), styles);
    }
}


export class TextBlock extends Block{
    constructor(value, options){
        super(value, options);
    }

    toHTML(){
        return row(col(
            `<p>${this.value}</p>`
        ), this.options.styles);
    }
}

export class TextColumnBlock extends Block{
    constructor(value, options){
        super(value, options);
    }

    toHTML(){
        const {styles = ''} = this.options;
        const html = this.value.map( item => col(item));
        return row( html.join(''), styles );
    }
}
