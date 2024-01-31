const CVPDF = () => {
    const resumeURL = process.env.PUBLIC_URL + '/Theo Wilenius CV 2024 English.pdf';
    return (
            <iframe
                src={resumeURL}
                style={{
                    width: '100%',
                    height: '100%',
                }}
                title="Theo Wilenius CV"
            ></iframe>
    );
};

export default CVPDF;
