import classes from './contact-form.module.css'

const ContactForm = () => {
  return <section className={classes.contact}>
    <h1>How can i help you ?</h1>
    <form className={classes.form}>
      <div className={classes.controls}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input
            type='email'
            required
            id='email'
          />
        </div>

        <div className={classes.control}>
          <label htmlFor='name'>Your Name</label>
          <input
            type='text'
            required
            id='name'
          />
        </div>

      </div>
      <div className={classes.control}>
        <label htmlFor='message'>Your Message</label>
        <textarea
          rows={5}
          id='message'
        />
      </div>

      <div className={classes.actions}>
        <button>Send message</button>
      </div>

    </form>
  </section>
}

export default ContactForm
