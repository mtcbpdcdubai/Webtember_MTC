<b><h1 align="center"><img src="media/logo.svg">WEBTEMBER - Session 4</h1></b>

28/Sep/2025 - Sunday<br>
Presenter: Sreenikethan Iyer and Astha Adhikary

Table of contents:
1. [Creating a portfolio website](#1-creating-a-portfolio-website)
2. [Deployment](#2-deployment)



---



# **1. Creating a portfolio website**
<!-- TODO: content -->



---



# **2. Deployment**
<!-- TODO: content --> 
---
Platform      |  Deployment Steps                                                                                                                                                                                                                                                                                                    |  Key Tips & Best Practices                                                                                     
--------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+----------------------------------------------------------------------------------------------------------------
Netlify       |  1. Prepare your project; ensureindex.htmlis in the root.
2. Sign up/log in to Netlify.
3. Either drag-and-drop your project folderorconnect your repository for auto-deploy.
4. Review build settings (adjust if needed), then deploy.
5. Access your site via the provided URL and set a custom domain if needed.  |  - Use Netlify CLI for advanced features.
- Test locally before deploy.
- Enable HTTPS/SSL.
- Optimize assets. 
GitHub Pages  |  1. Create a GitHub repository (name as<username>.github.iofor user sites).
2. Add and push site files.
3. Go to Settings > Pages and select branch/folder for deployment.
4. Save changes to publish.
5. Updates are live after each push.                                                                          |  - Work with branches & pull requests.
- Confirm HTTPS is active.
- Wait for DNS propagation on initial setup. 
Vercel        |  1. Push your project code to a git provider.
2. Sign up/log in to Vercel using a git provider.
3. Import your repo and verify auto-detected build settings.
4. Deploy to get your.vercel.appURL.
5. Set up a custom domain if desired.                                                                              |  - Usevercel.jsonfor redirects/rewrites.
- Preview deployments.
- Use environment variables for sensitive data.
