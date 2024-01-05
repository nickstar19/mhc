export const makebranchvariable=(gender,category)=>{
var categories=["NT1","NT2","NT3","ST","VJ","OPEN","OBC","SC",]
    if(categories.includes(category)){
        homecategory=`${gender}${category}H`
        otherthanhomecategory=`${gender}${category}O`
        statecategory=`${gender}${category}S`
        return[homecategory,otherthanhomecategory,statecategory]
    }
else{
    return[category,category,category]
}
}