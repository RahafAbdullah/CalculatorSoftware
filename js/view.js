class view
{
    getVal() {
        return document.getElementById("result").value;

    }

    setVal(y)
    {
        document.getElementById("result").value = y;
    }

    disval(val)
    {
        document.getElementById("result").value+=val;
    }
    clrval()
    {
        document.getElementById("result").value = "";
    }

}