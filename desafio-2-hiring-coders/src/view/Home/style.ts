import styled from "styled-components";

export const Container = styled.div`
 width: 80%;
 margin: auto;
 background: #000;

 .nav{
     display: flex;
     align-items: center;
     justify-content: space-between;
     background: rgb(13, 52, 63);
     color: #fff;
     padding: 10px;

     .cart{
         display: flex;
         justify-content: center;
         align-items: center;
     }
 }

 section {
     height: 100vh;
     width: 98%;
     background: #e2e2;
     display: flex;
     justify-content: space-between;
     padding: 1%;

     .product-content{
         display: grid;
         text-align: center;
         height: 300px;
         background: #fff;
         border-radius: 12px;
         padding: 12px;
     }
 }
`