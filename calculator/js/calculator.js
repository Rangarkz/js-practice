class Calculator{
    constructor(previousTextElement,currentTextElement){
        this.previousTextElement = previousTextElement;
        this.currentTextElement=currentTextElement;
        this.clear()
    }
    clear(){
        this.previousText=""
        this.currentText=""
        this.operator=undefined
    }
    delete(){
        this.currentText=this.currentText.toString().slice(0,-1)
    }
    appendNumber(number){
        if(number==='.' && this.currentText.includes('.')) return
        this.currentText = this.currentText.toString()+number.toString()
    }
    operation(operator){
        if(this.currentText==='') return
        if(this.previousText!==''){
            this.caclulate()
        } 
        this.operator=operator
        this.previousText=this.currentText
        this.currentText=""
    }
    calculate(){
        if(this.previousText==='' || this.currentText==='') return
        let temp
        const operator1 = parseFloat(this.previousText)
        const operator2 = parseFloat(this.currentText)
        switch(this.operator){
            case '+':
                temp=operator1+operator2
                break
            case '-':
                temp=operator1-operator2
                break
            case '×':
                temp=operator1*operator2
                break
            case '÷':
                temp=operator1/operator2
                break
            default:
                return
        }
        this.currentText=temp
        this.previousText=""
        this.operator=undefined
    }
    display(){
        this.currentTextElement.innerText=this.currentText;
        if(this.operator!=null){
            this.previousTextElement.innerText=this.previousText.toString()+this.operator.toString();
        }
        else{
            this.previousTextElement.innerText=this.previousText    
        }
    }
}
const numberButtons = document.querySelectorAll('[data-number]')
const operatorButtons = document.querySelectorAll('[data-operation')
const deleteButton= document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-allclear')
const equalButton=document.querySelector('[data-equal]')
const currentTextElement=document.querySelector('[data-curr-operand]')
const previousTextElement=document.querySelector('[data-prev-operand]')

const calculator = new Calculator(previousTextElement, currentTextElement)

numberButtons.forEach(button=>{
    button.addEventListener('click',() => {
        calculator.appendNumber(button.innerText)
        calculator.display()
    })
})
operatorButtons.forEach(button => {
    button.addEventListener('click', () =>{
        calculator.operation(button.innerText)
        calculator.display()
    })
})
allClearButton.addEventListener('click',()=>{
    calculator.clear()
    calculator.display()
})
deleteButton.addEventListener('click',()=>{
    calculator.delete()
    calculator.display()
})
equalButton.addEventListener('click',() =>{
    calculator.calculate()
    calculator.display()
})
