class controller {
    constructor(view, model) {
        this.CView = view;
        this.CModel = model;
    }

    updateRes() {
        let x = this.CView.getVal();
        let y = this.CModel.solve(x);
        this.CView.setVal(y);
    }

    dis(x) {
        this.CView.disval(x);
    }

    clr() {
        this.CView.clrval();
    }
}