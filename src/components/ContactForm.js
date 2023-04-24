import "./ContactForm.css";

function ContactForm() {
  return (
    <div className="form-container">
      <h1>Send a message</h1>
      <form>
        <input placeholder="Name" type="text" required />
        <input placeholder="Email" type="email" required />
        <input placeholder="Subject" type="text" required />
        <textarea placeholder="Message" row="4"></textarea>
        <button>Send</button>
      </form>
    </div>
  );
}

export default ContactForm;
