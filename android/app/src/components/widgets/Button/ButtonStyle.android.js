const styles = (theme) =>{ return {
    baseButton : {
        color : theme.colors.text,
        backgroundColor :theme.colors.default,
        borderColor : theme.colors.default,
    },
    buttonPrimary : {
        color: theme.colors.text,
        backgroundColor: theme.colors.primary,
        borderColor : theme.colors.primary,
    },
    buttonSecondary : {
        color: theme.colors.text,
        backgroundColor: theme.colors.secondary,
        borderColor : theme.colors.secondary,
    },
    buttonBaseOutlined : {
        borderStyle: "solid",
        borderWidth: 1,
        borderColor : theme.colors.default,
        color : theme.colors.default,
        backgroundColor : theme.colors.surface
    },
    buttonPrimaryOutlined : {
        borderStyle: "solid",
        borderWidth: 1,
        borderColor : theme.colors.primary,
        color: theme.colors.primary,
        backgroundColor : theme.colors.surface
    },
    buttonSecondaryOutlined : {
        borderStyle: "solid",
        borderWidth: 1,
        borderColor : theme.colors.secondary,
        color: theme.colors.secondary,
        backgroundColor : theme.colors.surface
    },
    buttonBaseFilled : {
        color: theme.colors.text,
        backgroundColor : theme.colors.default
    },
    buttonPrimaryFilled : {
        color: theme.colors.surface,
        backgroundColor : theme.colors.primary
    },
    buttonSecondaryFilled : {
        color: theme.colors.text,
        backgroundColor : theme.colors.secondary
    },
    buttonBaseBorderless: {
        color : theme.colors.default,
        backgroundColor : theme.colors.surface
    },
    buttonPrimaryBorderless : {
        color: theme.colors.primary,
        backgroundColor : theme.colors.surface
    },
    buttonSecondaryBorderless : {
        color: theme.colors.secondary,
        backgroundColor : theme.colors.surface
    },
    buttonFullLength : {
        width: '100%'
    },
    buttonRounded : {
        borderRadius: 5
    }
}};
export default styles;