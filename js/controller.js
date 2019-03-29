class controller {
    constructor(view, model) {
        this.CView = view;
        this.CModel = model;
        this.para=0;
    }

    updateRes() {
        if(this.para == 1) {
            let x = this.CView.getVal();
            let y = this.CModel.solve(x);
            this.CView.setVal(y);
        }
        else
        alert("you have to enter a digit not an operator");
    }

    dis(x) {
        if (this.para==1)
        {
            this.CView.disval(x);
            this.para=0;
        }
        else if(!(x =='+' || x =='-' || x=='*' || x=='/' ))
       {
           this.CView.disval(x);
           this.para=1;
       }
       else
           alert("you have to enter a digit not an operator");
    }

    clr() {
        this.CView.clrval();
        this.para=0;
    }
}