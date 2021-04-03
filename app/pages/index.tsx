import Head from 'next/head';
import axios  from 'axios'
import { Message, MyResponse } from '../interfaces';
// import Link from 'next/link';
import styled from 'styled-components';
import { Form, Input } from '../theme/comps/form';
import { BASE_URL } from '../utils/constants';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { Error } from '../theme/comps';

const Single = styled.p`
    padding: 2px 16px;
    background: #fff;
    display: block;
    margin: 20px 19px;
    border-left: 8px solid #fff;

    &:hover {
        border-left: 8px solid #4979FF;
        cursor: pointer;
    }
`;

interface Props {
  // messages: Message[]  
}

const IndexPage = ({ }: Props) => {

  const [messages, setMessages] = useState<Message[]>([]);
  const [msg, setMsg] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMsg(e.target.value);
    setError('');
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try{
      const url = BASE_URL + 'api/messages/add-one/';
      const res = await axios.post(url, {text: msg});
      let data: MyResponse = res.data;
      if (!data.success) return setError(data.msg);
      setMsg('');
      fetchData();
    } catch(error) {
      console.log(error)
      if (error.response && error.response.data && error.response.data.msg) return setError(error.response.data.msg);
      setError(error.message);
    }
  }

  const fetchData = async () => {
    try {
      const url = BASE_URL + 'api/messages/';
      console.log('URL: ', url);
      const res = await axios.get(url);
      let data: MyResponse = res.data;
      setMessages(data.data);
    } catch(error) {
      console.log(error.message);
      if (error.response && error.response.data) console.log(error.response.data);
      setMessages([]);
    }
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <>
    <Head>
      <title>OHOHOH | Home</title>
    </Head>
      <h1>OHOHOH</h1>
      <h2>Add a message:</h2>
      <Form onSubmit={handleSubmit}>
        <Input 
          type='text'
          value={msg}
          onChange={handleChange}
        />

      </Form>
      {error && <Error>{error}</Error>}
      {messages.map(message => (
          <Single key={message.message_id}>{message.text}</Single>
    ))}
    </>
  )
}

// export const getStaticProps = async () => {
//   try {
//     console.log(INTERNAL_URL)
//     const url = INTERNAL_URL + 'api/messages/';
//     const res = await axios.get(url);
//     let data: MyResponse = res.data;
//     return { 
//       props: {messages: data.data }
//     };
//   } catch(error) {
//     console.log(error.message);
//     if (error.response && error.response.data) console.log(error.response.data);
//     return { 
//       props: {messages: [] }
//     };
//   }
// }

export default IndexPage
