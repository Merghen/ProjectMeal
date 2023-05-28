import {Comment} from "../models/commetModel.js"


export async function createComment(req,res){

    // formdan verileri çektim.
    const name = req.body.Username;
    const surname= req.body.Surname;
    const comment= req.body.Comment;
    const mealId = req.params.id;
    
    // veritabanına ekleme işlemi
    try {
        const newComment = await Comment({
            name:name,
            surname:surname,
            comment:comment,
            mealId:mealId
        });

        await newComment.save();
        res.redirect(`/meals/${mealId}`);

    } catch (err) {
    
        res.send(err);
    }
 };