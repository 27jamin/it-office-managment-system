const Yup =  require("yup");

const formSchema = Yup.object({
    username: Yup.string().required("Username required").min(6,"username short").max(28,"username too big"),
    password: Yup.string().required("Password required").min(6,"Password short").max(28,"Password too big"),
});

const validateForm = (req, res, next ) => {

    const formData = req.body;

    formSchema.validate(formData).catch(() => {
        res.status(422).send();
    }).then(valid => {
        if(valid){
            console.log("form is good");
            next();
        }else{
            res.status(422).send();
        }
    });
}

module.exports = validateForm;