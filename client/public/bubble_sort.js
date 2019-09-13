//buble sort

const arr =[5,6,2,11];

//5,2,6,11
//2,5,6,11

const bubblesort =arr=>{
    const len=arr.length;
    for(let i=0;i<len;i++){
        for(let j=0;j<len;j++){
            if(arr[j]>arr[j+1])
            {
                //swap
                const temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
            }
        }
    }
    return arr;
}
console.log(arr); //org array
bubblesort(arr);
console.log(arr);//sorted array



