# Getting Started with Cursor Design Academy 🚀

Welcome! This guide will help you get the app running in minutes.

## Step 1: Install Dependencies

Open your terminal in this project folder and run:

```bash
npm install
```
npm
This will download all the necessary packages. It might take a few minutes.

## Step 2: Start the Development Server

Once installation is complete, start the app:

```bash
npm run dev
```

You should see output like:

```
VITE v5.0.8  ready in 500 ms

➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
```

## Step 3: Open in Browser

Click the link (http://localhost:5173/) or copy it into your browser.

**That's it!** The Cursor Design Academy should now be running! 🎉

## What to Do Next

1. **Explore the Home Page** - Get an overview of all features
2. **Start with Tutorials** - Click "Tutorials" in the navigation
3. **Complete Your First Lesson** - Follow the step-by-step guide
4. **Earn Points & Achievements** - Track your progress
5. **Play Games** - Test your knowledge in a fun way

## Troubleshooting

### "Port 5173 is already in use"

Someone else is using that port. Try:

```bash
npm run dev -- --port 3000
```

Then open http://localhost:3000/

### "Cannot find module" errors

Delete `node_modules` and reinstall:

```bash
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Page is blank

1. Check the browser console for errors (F12 or Cmd+Option+I)
2. Make sure all files are saved
3. Try refreshing the page (Cmd+R or Ctrl+R)

## Learning Tips

### For Complete Beginners

- Don't rush - take time to understand each concept
- Complete tutorials in order
- Pause and try the exercises
- Ask questions (use Cursor's AI chat!)
- Celebrate small wins

### Suggested Learning Path

**Day 1-2**: Complete "Getting Started with Cursor" tutorial
**Day 3-4**: Learn keyboard shortcuts and practice
**Day 5-7**: Build your first component with AI help
**Week 2**: Complete AI commands tutorials
**Week 3**: Build a small project
**Week 4**: Learn configuration and collaboration

## Using Cursor While Learning

If you're viewing this in Cursor IDE:

1. **Press Cmd+L (Ctrl+L)** to open AI chat
2. **Ask questions** like:
   - "What does this code do?"
   - "How can I improve this component?"
   - "Explain React hooks in simple terms"
3. **Use Cmd+K (Ctrl+K)** to generate code inline
4. **Experiment** - you can't break anything!

## Project Structure Overview

```
├── src/
│   ├── pages/           ← Different sections of the app
│   │   ├── Home.tsx     ← Landing page
│   │   ├── Tutorials.tsx ← Step-by-step lessons
│   │   ├── Training.tsx  ← Deep-dive modules
│   │   ├── Games.tsx     ← Interactive games
│   │   └── ...
│   ├── components/      ← Reusable UI pieces
│   └── contexts/        ← App state management
├── public/              ← Static files (images, icons)
└── package.json         ← Project dependencies
```

## Need Help?

### In Cursor
1. Select any code
2. Press Cmd+L (Ctrl+L)
3. Ask: "What does this do?" or "How does this work?"

### Common Questions

**Q: Do I need to know JavaScript?**
A: No! This academy teaches you as you go. Start with basics.

**Q: Can I modify the content?**
A: Absolutely! That's encouraged. Edit the files in `src/pages/`

**Q: Will this teach me professional development?**
A: Yes! You'll learn industry best practices and real workflows.

**Q: How long does it take to complete?**
A: At your own pace! Some finish in 2 weeks, others take months.

## Your First Achievement

Once the app is running:
1. Go to Tutorials
2. Start "Getting Started with Cursor"
3. Complete the first step
4. 🎉 You'll earn your first 100 points!

## Contributing

Found a typo? Want to add content? Feel free to:
1. Edit the files
2. Test your changes
3. Share your improvements

---

**Ready to become a Cursor power user?** 

The journey of a thousand miles begins with a single step. 

You've got this! 💪

*Start the app with `npm run dev` and begin your first tutorial!*

