import React, {useState, useEffect } from "react";
import { TextField,Button, Typography,Paper } from "@material-ui/core";
import useStyles from "./style";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";
import { createPost ,updatePost} from "../../actions/posts";

const Form = ({ currentId , setCurrentId }) =>
{
    const [postData, setPostData] = useState({
        creator : '',
        title :'',
        message :'',
        tags:'',
        selectedFile:''
    }); 

    const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId) : null)
    useEffect(() => {
        if(post)
        {
            setPostData(post);
        }

    },[post]);
    const dispatch = useDispatch();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        
        if(currentId)
        {
            console.log(currentId);
            dispatch(updatePost(currentId, postData));
        }
        else
        {
            dispatch(createPost(postData));
        }
        clear();
        
         
        // dispach(createPost(postData))
    };
    const changename = (e) => {
        setPostData({...postData , creator : e.target.value});
        
    }
    const changetitle = (e) => {
        setPostData({...postData , title : e.target.value});
        
    }
    const changemsg = (e) => {
        setPostData({...postData , message : e.target.value});
        
    }
    const changetags = (e) => {
        setPostData({...postData , tags : e.target.value.split(',')});
        
    }
    const clear = () => {
        setCurrentId(null);
        setPostData({creator : '',
        title :'',
        message :'',
        tags:'',
        selectedFile:''});
    }
    const classes  = useStyles();
    return(
        <Paper className={classes.paper}>
             <form autoComplete="off" noValidate className={`${classes.root } ${classes.form}`} onSubmit={handleSubmit}>
             <Typography variant="h6"> Creating a Memory</Typography>
             <TextField name="creator" variant="outlined" label = "Creator" fullWidth value={postData.creator} onChange={changename} />
             <TextField name="title" variant="outlined" label = "Title" fullWidth value={postData.title} onChange={changetitle} />
             <TextField name="message" variant="outlined" label = "Message" fullWidth value={postData.message} onChange={changemsg} />
             <TextField name="tags" variant="outlined" label = "Tags" fullWidth value={postData.tags} onChange={changetags} />
             <div className={classes.fileInput}>
                 <FileBase type = "file" multiple={false} onDone ={({base64}) => setPostData({...postData , selectedFile:base64})} />
             </div>
             <Button className={classes.buttonSubmit} variant = "contained" color="primary" size = "large" type="submit" fullWidth>Submit</Button>
             <Button  variant = "contained" color="secondary" size = "small" onClick={clear} fullWidth>Clear</Button>
             </form>
         </Paper>
    )
}
export default Form;
