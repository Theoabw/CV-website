import CV from '../assets/CV.pdf';
const CVPDF = () => {
    return (
            <iframe
                src={CV}
                style={{
                    width: '100%',
                    height: '100%',
                }}
                title="Theo Wilenius CV"
            ></iframe>
    );
};

export default CVPDF;
