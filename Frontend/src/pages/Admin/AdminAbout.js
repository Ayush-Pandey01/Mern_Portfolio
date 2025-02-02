import React from 'react'
import { Form, message } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { ShowLoading, HideLoading } from '../../redux/rootSlice'
import axios from "axios"

function AdminAbout() {

  const dispatch = useDispatch()
    const { portfolioData } = useSelector((state) => state.root);
    const onFinish = async (values) => {
        try{
          const tempSkills=values.skills.split(",")
          values.skills=tempSkills;
        dispatch(ShowLoading())
        const response = await axios.post('https://mern-portfolio-backend-unnf.onrender.com/api/portfolio/update-about',
            {
                ...values,
                _id: portfolioData.about._id
            }
        )
        dispatch(HideLoading())
        if(response.data.success){
            console.log(response.data.success)
            message.success(response.data.message)
        }else{
            message.error(response.data.message)
        }
    }catch(error){
        dispatch(HideLoading())
        message.error(error.message)
    }
    }
  return (
    <div>
    <Form onFinish={onFinish} layout='vertical' initialValues={{
      ...portfolioData.about,
      skills:portfolioData.about.skills.join(" , ")
      }}>
        <Form.Item name="lottieURL" label="lottieURL">
            <input placeholder='lottieURL' />
        </Form.Item>

        <Form.Item name="description1" label="Description1">
            <textarea placeholder='Description1'className='resize-none sm:height-[110px]' />
        </Form.Item>
        <Form.Item name="description2" label="Description2">
            <textarea placeholder='Description2' className='resize-none sm:height-[110px]'/>
        </Form.Item>
        <Form.Item name="skills" label="Skills">
            <textarea placeholder='skills' className='resize-none sm:height-[110px]'/>
        </Form.Item>
        <div className='flex justify-end w-[95%]'>
            <button className='px-5 py-2 bg-primary text-white' type='submit'>
                Save
            </button>

        </div>
    </Form>
</div>
  )
}

export default AdminAbout