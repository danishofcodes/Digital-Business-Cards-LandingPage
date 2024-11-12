import React from 'react'
import Accordion from '../accordion/Accordion'
import "./faq.css";
import { useState } from 'react'

export default function FAQ() {
  const [activeId, setActiveId] = useState(null); 

  function handleToggle(id){
    
    console.log(id)
    setActiveId((prev) => (prev == id ? null : id ))
  }

  const faqs = [
    {id:1,
      question: "How to order the card?" ,
      answer: "To order the card head first to our website and start creating your prefered card type. choose make payment once you finish and you will get your card delivered in 6-15 days"
    },
    {id:2,
      question: "How to create better looking cards using this site?" ,
      answer: "To order the card head first to our website and start creating your prefered card type. choose make payment once you finish and you will get your card delivered in 6-15 days"
    },
    {id:3,
      question: "What is the cost of per card bundle?" ,
      answer: "All information are present in the sectionfirst to our website and start creating your prefered card type. choose make payment once you finish and you will get your card delivered in 6-15 days"
    },
    {id:4,
      question: "How to avail a coupon offer ?" ,
      answer: "head first to our website and start creating your prefered card type. choose make payment once you finish and you will get your card delivered in 6-15 days"
    },
    {id:5,
      question: "What if I want to return the cards?" ,
      answer: "5 days return policy head first to our website and start creating your prefered card type. choose make payment once you finish and you will get your card delivered in 6-15 days"
    },
    {id:6,
      question: "Can I use any Payment methods to pay" ,
      answer: "TAny type of methods will do.  head first to our website and start creating your prefered card type. choose make payment once you finish and you will get your card delivered in 6-15 days"
    },
    {id:7,
      question: "Can I order multiple cards at one go?" ,
      answer: "Yes you can order multiple. Head first to our website and start creating your prefered card type. choose make payment once you finish and you will get your card delivered in 6-15 days"
    },
    {id:8,
      question: "Is my information safe?" ,
      answer: "Safety comes first start creating your prefered card type. choose make payment once you finish and you will get your card delivered in 6-15 days"
    }


  ];

  return (
    <div className='custom-container mb-4'>
      <h3 className='title-2 poppins-bold mb-1'>Frequently Asked <span className='highlighted'>Questions</span></h3>
      <div className='faq-container'>
        {faqs.map((faq) => (
          <div className='faq-item' key={faq.id}>
            <Accordion question={faq.question} info={faq.answer} isOpen={activeId === faq.id} id={faq.id} onToggle={handleToggle}/>
          </div>
        ))}
      </div>
    </div>
  );
}
