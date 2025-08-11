import '../../styles/contactPage.scss';
import { useState, useEffect } from 'react';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [status, setStatus] = useState('');

    useEffect(() => {
        if (status === 'sucesso') {
            const timer = setTimeout(() => {
                setStatus('');
            }, 5000);

            return () => clearTimeout(timer);
        }
    }, [status]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('enviando');

        setTimeout(() => {
            setStatus('sucesso');
            console.log('Dados do formulário:', formData);
            setFormData({
                name: '',
                email: '',
                message: '',
            });
        }, 2000);
    };

    return (
        <section className="container-contact" id='contact'>
            <h1>Fale Conosco</h1>
            <p className='description-contact'>
                Preencha o formulário abaixo e em breve entraremos em contato com você.
            </p>

            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Nome</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="email">E-mail</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="message">Mensagem</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="5"
                        required
                    ></textarea>
                </div>

                <button
                    type="submit"
                    disabled={status === 'enviando'}
                >
                    {status === 'enviando' ? 'Enviando...' : 'Enviar Mensagem'}
                </button>
            </form>

            {status === 'sucesso' && (
                <p className="successMessage">
                    Mensagem enviada com sucesso! Agradecemos o seu contato.
                </p>
            )}
        </section>
    );
}