import { styled } from "@mui/system";
import * as styleVars from "../../styleVariables";
import { FlexRow } from "../../baseComponents/Flex";
import RadioGroupRating, { customIcons as gradeIcons } from "../../baseComponents/Rating";
import { loopList } from "../../utils";
import React from "react";
import FormControl from "@mui/material/FormControl";
import {Box, Button, useMediaQuery} from "@mui/material";
import { useBasketState } from "../../../context/BasketContext";
// import useState from "react";

const CommentWrapper = styled('div')({
    borderRadius:styleVars.borderRadius,
    // border:styleVars.borderRoot,
    background:'#e1dfdf45',
    maxWidth:'95%',
    margin:'10px 4px 10px 0',
    padding:'10px 10px 10px 0',
    fontSize:'0.8rem',
    textAlign:'justify'
})

const CommentTextArea = styled('textarea')({
    border: styleVars.borderRoot,
    borderRadius: styleVars.borderRadius,
    fontSize:'0.7rem',
    padding:'8px',
    fontFamily: 'Shabnam',
    resize:'none'
})

const CommentHeader = styled('span')({
    fontFamily:'Shabnam FD',
    paddingLeft:'0.5rem',
    fontSize:'0.7rem',
    opacity:'100%'
})


const Comment = ({data}) => {
    const sm = useMediaQuery('(max-width:780px)');
    return(
        <CommentWrapper>
            <FlexRow sx={{alignItems:'center'}}>
                <span>
                    <div style={{padding:'2px 0 2px 5px'}}>
                        {gradeIcons[data.rate].icon}
                    </div>
                </span>
                <CommentHeader>{data.date}</CommentHeader>
                <CommentHeader>{data.user}</CommentHeader>
            </FlexRow>
            <p style={{ fontSize:'0.7rem' }}>{data.text}</p>
        </CommentWrapper>
    )
}



const AddComment = ({onChange}) => {
  return(
    <>
        <CommentTextArea
            id='comment-textarea'
            name='text'
            placeholder='دیدگاه خود را بنویسید...'
            rows={8}
            onChange={(e) => onChange(e)}
        />
    </>
  )
}

const Comments = () => {
    const { comments } = useBasketState().productData
    const children = loopList(comments, Comment)
    const [state, setState] = React.useState({feedback:'', text:'' })
    
    function handleFromValues(e,name) {
        const value = e.target.value;
        setState({...state, [name]:value});
        // console.log(e.target.value,name, '<=================>>', state)
    }
    function onSubmit() {
        console.log('submitted=============')
    }
    return(
        <>
            <br/>
            {children}
            <br/>
            <p>به این محصول امتیاز دهید</p>
            <FormControl sx={{ width:'80%' }} onSubmit={onSubmit}>
                <FlexRow>
                    <label style={{ fontSize:'0.9rem' }}>رضایت شما از محصول:</label>
                    <Box sx={{ mx:'8px', marginTop:'-2px' }}>
                        <RadioGroupRating
                            id='rating'
                            name='feedback'
                            style={{ direction:'ltr' }}
                            onChange={(e) => handleFromValues(e,'feedback')}
                        />
                    </Box>
                </FlexRow>
                <br/>
                <AddComment
                    onChange={(e) => handleFromValues(e,'text')}
                />
                <Button
                    onClick={onSubmit}
                    type='submit'
                    placeholder='ثبت'
                    variant='outlined'
                    sx={{ my:'8px', width:'20%' }}>
                    ثبت
                </Button>

            </FormControl>
        </>
    )
}

export default Comments;
