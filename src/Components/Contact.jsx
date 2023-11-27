import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState(null);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('../php/sendEmail.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(formData),
      });

      if (response.ok) {
        const result = await response.json();
        setStatus(result.status);
        console.log(result.status === 'success' ? 'Formulario enviado exitosamente' : 'Error al enviar el formulario');
      } else {
        setStatus('error');
        console.error('Error al enviar el formulario');
      }
    } catch (error) {
      setStatus('error');
      console.error('Error al enviar el formulario:', error);
    }
  };

  return (
    <div id="Contact" className="p-4 lg:p-20 flex flex-col items-center justify-center">
      <h1 data-aos="fade-up" className="text-[40px] font-semibold mb-20 leading-normal text-green-500">Contact With Me</h1>
      {status === 'success' && <p className="text-green-500 mb-4">Formulario enviado con éxito</p>}
      {status === 'error' && <p className="text-red-500 mb-4">Error al enviar el formulario</p>}
      <form onSubmit={handleSubmit} className="flex flex-col gap-2 lg:w-1/2">
        <div className="lg:flex gap-6">
          <input
            className="w-full my-3 rounded-lg bg-slate-800 p-4 border-2 border-green-500 b_glow text-x1 text-slate-500 pla"
            placeholder="Enter Your Name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
          <input
            className="w-full my-3 rounded-lg bg-slate-800 p-4 border-2 border-green-500 b_glow text-x1 text-slate-500 pla"
            placeholder="Enter Your Mail"
            type="text"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <textarea
          className="w-full my-3 rounded-lg bg-slate-800 p-4 border-2 border-green-500 b_glow text-x1 text-slate-500 pla"
          placeholder="Write Your Message..."
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          cols="30"
          rows="10"
        ></textarea>
        <button
          className="neno-button shadow-x1 hover:shadow-green-900/50 text-white border-2 bg-green-500 hover:bg-slate-900 rouinded-lg py-6 px-8 uppercase relative overflow-hidden b_glow text-x1 text-bold mb-10"
          type="submit"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
