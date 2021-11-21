import { StyleSheet } from 'react-native'

export const ProfileScreenStyle = StyleSheet.create({
    Image:{
        width: 90,
        height: 90,
        resizeMode: "cover",
        borderRadius: 50,
    },
    ProfileTitle : {
        fontFamily: "poppins-medium",
        fontSize: 18,
        color: "#fff",
        marginTop: 15,
    },
    Status : {
        fontFamily: "poppins-regular",
        fontSize: 12,
        color: "#9F9F9F",
    },
    EditButton : {
        fontFamily: "poppins-medium",
        fontSize: 12,
        color: "#fff",
    }

})

export const ProfileCardStyle = StyleSheet.create({
    Container : {
        flexDirection : "row",
        justifyContent : "space-between",
        alignItems : "center",
        padding : 26,
        borderRadius : 15,
        backgroundColor : "#252525",
        marginBottom : 20,
    },
    DescCont :{
        flex : 1,
        flexDirection : "column",
    },
    Title : {
        fontSize : 16,
        fontFamily:"poppins-regular",
        color : "#9F9F9F",
    },
    Desc : {
        fontSize : 22,
        fontFamily:"poppins-medium",
        color : "#ffffff",
    },

})
