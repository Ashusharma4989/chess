import React from 'react'
//import H from './Cscript';
 const ChessScript = () => {
    let arr=[[1,2,3,4,5,6,7,8], [9,10,11,12,13,14,15,16] ,[17,18,19,20,21,22,23,24], 
    [25,26,27,28,29,30,31,32] ,[33,34,35,36,37,38,39,40],[41,42,43,44,45,46,47,48],
    [49,50,51,52,53,54],[55,56,57,58,59,60,61,62,63,64]];
                        const getIndexOfK=(arr, k)=> {
                            for (var i = 0; i < arr.length; i++) {
                            var index = arr[i].indexOf(k);
                            if (index > -1) {
                                return [i, index];
                            }
                            }
                        }
                        const possibleArray=(i,j)=>{
                            let ans=[];
                            if(j-2>=0){
                                if(i+1<8){
                                    let temp=[i+1,j-2];
                                    ans.push(temp);
                                }
                                if(i-1>=0){
                                    let temp=[i-1,j-2];
                                    ans.push(temp);
                                }
                            }
                            if(j+2<8){
                                if(i+1<8){
                                let temp=[i+1,j+2];
                                    ans.push(temp);}
                                    if(i-1>=0){
                                        let temp=[i-1,j+2];
                                        ans.push(temp);}
                            }
                            if(i-2>=0){ //top
                                if(j-1>=0){
                                    let temp=[i-2,j-1];
                                    ans.push(temp);
                                }
                                if(j+1<8){
                                        let temp=[i-2,j+1];
                                        ans.push(temp);
                                }
                            }
                            if(i+2<8){ //bottom
                                if((j-1)>=0){
                                    let temp=[i+2,j-1];
                                    ans.push(temp);
                                }
                                if(j+1<8){
                                        let temp=[i+2,j+1];
                                        ans.push(temp);
                                    }
                                
                            }
                            return ans;
                        } 
                    let buttons=document.querySelectorAll('button');
                    let find=[];
                    for(item of buttons){
                        items.addEventListner('click',(e)=>{
                            let buttontext=e.target.innerText;
                            let [i,j]=getIndexOfK(arr,buttontext);
                            find=possibleArray(i,j);
                            
                        })
                    }
                    let finalans=[];
                    for(let i=0;i<find.length;i++){
                        finalans.push(find[i][0]+find[i][1]);
                    }
                    return (
                        <>
                        {
                          finalans.map(item=>{
                                document.getElementById(`${item}`).style.color="red";
                          }) 
                        } 
                        </>
                    )
                }
export default ChessScript;
