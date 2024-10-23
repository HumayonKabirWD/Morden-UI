"use client"

import React from 'react'
import * as Accordion from "@radix-ui/react-accordion";

const FaQ = () => {
    const items =[
        {
            quistion:'what is the best wey to use this in web?',
            answer:'This is a grat option to get a most popular thing to get and make it happen and i llike it do much , for my openion this is quit a bit compolcary to get it most popularl in this time',
        },
        {
            quistion:'How do you handle objections from a customer?',
            answer:'Handling objections is a natural part of the sales process. I see them as opportunities to understand the customers concerns better. I actively listen to the objection, empathize with the customer, and clarify any misunderstanding example, if the objection is about price, I focus on the value the product brings and how it can solve their pain points time',
        },
        {
            quistion:' What is your approach to developing relationships with new clients?',
            answer:'I prioritize relationship-building by understanding my clients unique needs and challenges. I start by doing research on their business and industry, which allows me to speak their language and offer tailored solutions. During conversations, I listen carefully, ask thoughtful questions, and take a genuine interest in their goals',
        },
        {
            quistion:' How do you stay motivated in a sales job when you face rejection?',
            answer:'Rejection is a normal part of sales, and I view it as a learning opportunity. I stay motivated by focusing on the larger picture and my long-term goals. Each ',
        },
    ]

  return (
    <div className='flex flex-col lg:flex-row py-10 w-full lg:py-20'>
        <div className="lg:w-1/3 lg:px-5 mt-10">
            <h3 className='text-xl font-semibold text-[#EC3799]'>Frequently Asked Question</h3>
            <h1 className='text-3xl font-medium py-5'>Lets Clarefy some of your Question</h1>
            <p className='text-base lg:text-lg text-[#36385c]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis minima repellat numquam, quasi aperiam nemo quos nostrum cumque modi repudiandae cupiditate</p>
        </div>
        <div className="mt-10 lg:w-2/3">
            <Accordion.Root type='single'defaultValue='item-1'collapsible className='flex flex-col gap-y-5'>
                {items.map((item,index) =>(
                    <div key={index}>
                        <Accordion.Item value={`item-${index+1}`} className='bg-[#d4ebff] p-4 rounded-[8px]'>
                            <Accordion.Header>
                                <Accordion.Trigger className='flex w-full items-center justify-between'>
                                    <p className='text-lg font-medium text-start'>{item.quistion}</p>
                                    <p className='text-4xl'>+</p>
                                </Accordion.Trigger>
                            </Accordion.Header>
                            <Accordion.Content>
                                <p className='mt-2 text-lg'>{item.answer}</p>
                            </Accordion.Content>
                        </Accordion.Item>
                    </div>
                ))}
            </Accordion.Root>
        </div>
    </div>
  )
}

export default FaQ