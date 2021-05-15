import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { ChefDetailContent } from '../../src/components/Layouts/chef/';
import FoodHeader from '../../src/components/Layouts/Header/HomeHeader';
import FoodFooter from '../../src/components/Layouts/home/FoodFooter';
import axiosClient from '../../src/utils/axios-config';
import Error from 'next/error'

const Chef = () => {
    const [data,setData] = useState("")
    const router = useRouter()
    const chefId = router.query.chefId || []
    useEffect(async () => {
        if(router.isReady){
        try{
            const url = `https://mycheffy.herokuapp.com/plate/chef/${chefId}`
            const res = await axiosClient.get(url);
            console.log(res)
            console.log(res.data)
            setData(res.data);
        }
        catch(e){
            if(e.response.status == 404){
                setData("404")
            }
        }
    }
    },[router.isReady])
    return (
        <div>
            <FoodHeader />
            {
                data == "404" ? <Error statusCode={parseInt(data)} /> : data && <ChefDetailContent data={data} />
            }
            <FoodFooter />
        </div>
    )
}

export default Chef;