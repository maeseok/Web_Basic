const student={
    학번:20240001,
    이름:"홍길동",
    성적:[64,80,77,97,90],
    displayInfo:function(){
        console.log(`학번: ${this.학번}`);
        console.log(`이름: ${this.이름}`);
        console.log(`성적: ${this.성적}`);
    },
    getHighest:function(){
        let tmp=this.성적[0];
        for(let i=1;i<this.성적.length;i++){
            if(tmp<this.성적[i]){
                tmp=this.성적[i]
            }
        }
        console.log(`최고 성적: ${tmp}`)
    }
}

student.displayInfo();
student.getHighest();