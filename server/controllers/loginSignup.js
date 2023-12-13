import userData from "../model/user.js";

const postuserdata = async (req, res) => {
    const { name, email, number, password } = req.body;
    try {
        const newUser = new userData({
            name,
            number,
            email,
            password
        })

        const saveUser = await newUser.save();

        res.json({
            success: "true",
            data: saveUser,
            message: "Signup successfully..!"
        }
        )
    } catch (e) {
        res.json({
            success: "false",
            message: e.message
        })
    }

}


const postuserlogin = async (req, res) => {
    const { name, email, number, password } = req.body;
    const findUser = await userData.findOne({ password, email }).select('name number email')

    if (findUser == null) {
        return res.json({
            success: "false",
            message: "chal nikal yaha se..!"
        }
        )
    }
    res.json({
        success: "true",
        data: findUser,
        message: "login successfully..!"
    }
    )
}
export {postuserdata,postuserlogin}