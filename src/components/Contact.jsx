import React, { useState } from 'react';
import { FiMail, FiMapPin, FiPhone, FiCheckCircle } from 'react-icons/fi';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const validate = () => {
        let tempErrors = {};
        if (!formData.name.trim()) tempErrors.name = "Name is required";
        if (!formData.email) {
            tempErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            tempErrors.email = "Email is invalid";
        }
        if (!formData.message.trim()) tempErrors.message = "Message is required";

        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            setIsSubmitting(true);

            // Simulate API call
            setTimeout(() => {
                setIsSubmitting(false);
                setIsSuccess(true);
                setFormData({ name: '', email: '', message: '' });

                // Reset success message after 5 seconds
                setTimeout(() => setIsSuccess(false), 5000);
            }, 1500);
        }
    };

    return (
        <section id="contact" className="section contact-section">
            <div className="container">
                <h2 className="heading-secondary reveal active">Get In <span className="text-gradient">Touch</span></h2>

                <div className="contact-container">
                    {/* Contact Info */}
                    <div className="contact-info reveal active">
                        <h3 className="contact-subtitle">Let's Connect</h3>
                        <p className="contact-text">
                            I'm currently looking for new opportunities and collaborations.
                            Whether you have a question or just want to say hi, I'll try my best to get back to you!
                        </p>

                        <div className="info-cards">
                            <div className="info-card glass-card">
                                <div className="info-icon"><FiMail /></div>
                                <div>
                                    <h4>Email</h4>
                                    <a href="mailto:harshrajthakur766@gmail.com">harshrajthakur766@gmail.com</a>
                                </div>
                            </div>

                            <div className="info-card glass-card">
                                <div className="info-icon"><FiPhone /></div>
                                <div>
                                    <h4>Phone</h4>
                                    <a href="tel:+919303471913">+91 9303471913</a>
                                </div>
                            </div>

                            <div className="info-card glass-card">
                                <div className="info-icon"><FiMapPin /></div>
                                <div>
                                    <h4>Location</h4>
                                    <span>Dewas, 455001 (M.P.), India</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="contact-form-wrapper reveal active" style={{ transitionDelay: '0.2s' }}>
                        {isSuccess ? (
                            <div className="success-message glass-card">
                                <FiCheckCircle size={60} color="var(--accent-primary)" />
                                <h3>Message Sent Successfully!</h3>
                                <p>Thank you for reaching out. I will get back to you soon.</p>
                                <button className="btn btn-outline mt-4" onClick={() => setIsSuccess(false)}>Send Another</button>
                            </div>
                        ) : (
                            <form className="contact-form glass-card" onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="name">Your Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder="Name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className={errors.name ? 'error' : ''}
                                    />
                                    {errors.name && <span className="error-text">{errors.name}</span>}
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">Your Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="mail id"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className={errors.email ? 'error' : ''}
                                    />
                                    {errors.email && <span className="error-text">{errors.email}</span>}
                                </div>

                                <div className="form-group">
                                    <label htmlFor="message">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="5"
                                        placeholder="Hello, I'd like to talk about..."
                                        value={formData.message}
                                        onChange={handleChange}
                                        className={errors.message ? 'error' : ''}
                                    ></textarea>
                                    {errors.message && <span className="error-text">{errors.message}</span>}
                                </div>

                                <button type="submit" className="btn btn-primary submit-btn" disabled={isSubmitting}>
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
