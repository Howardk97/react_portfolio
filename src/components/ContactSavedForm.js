const savedForm = (<form className="bg-indigo-900 row" 
                    id="contact-form" 
                    style={formStyle} 
                    href={form}
                    onSubmit={sendEmail}
                    // action="mailto:kimberlyhoward529@gmail.com" 
                    // method="post" 
                    // enctype="text/plain"
                    >
                <input type="hidden" name="contact_number"/>
                <h1 className="mx-5 mt-5 mb-2 text-bold" style={formMessage}>Send me a message!</h1>
                <div className="ml-7 col-5">
                    <label 
                        // for="exampleFormControlInput1" 
                        className="form-label" 
                        style={formText}>Name</label>
                    <input 
                        type="text" 
                        name="user_name" 
                        className="form-control" 
                        // id="exampleFormControlInput1" 
                        placeholder="type your name here..." 
                        style={formText}/>
                </div>
                <div className="ml-7 col-5">
                    <label 
                        // for="exampleFormControlInput1" 
                        className="form-label" 
                        style={formText}
                        >Email address</label>
                    <input 
                        type="email" 
                        className="form-control" 
                        // id="exampleFormControlInput1" 
                        name="user_email" 
                        placeholder="type your email here..." style={formText}/>
                </div>
                <div className="flex row justify-center">
                    <label 
                        // for="exampleFormControlTextarea1" 
                        className="form-label ml-7" 
                        style={formText} 
                        name="message">Message</label>
                    {/* <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Type message here..." rows="3"></textarea> */}
                    <textarea
                        style={message}
						// type="text"
						className="form-input flex rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 h-40"
						rows="6"
						placeholder="Type your post here"
                        name="message"
					></textarea>
                    <input type="submit" value="Send" style={buttonStyle} className="mt-2"/>
                </div>
            </form>)