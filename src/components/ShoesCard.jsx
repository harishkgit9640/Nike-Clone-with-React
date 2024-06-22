import React from 'react'

const ShoesCard = ({ imgUrl, changeBigShoeImage, bigShoeImg }) => {
    const handleClick = () => {
        if (bigShoeImg !== imgUrl.bigShoe) {
            changeBigShoeImage(imgUrl.bigShoe);
            console.log("big shoes" + imgUrl.bigShoe);
        }
    }
    return (
        <div className={`border-2 rounded-xl
         ${bigShoeImg === imgUrl.bigShoe ? 'border-coral-red ' : 'border-transparent'} 
         cursor-pointer max-sm:flex-1`} onClick={handleClick}>
            <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40  rounded-xl max-sm:p-4">
                <img src={imgUrl.thumbnail} className='object-contain' width={127} height={103} alt="show collection" />
            </div>
        </div>
    )
}

export default ShoesCard