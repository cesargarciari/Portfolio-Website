const Footer = () => {
  return (
    <footer className="border-t border-border/60 bg-background text-foreground py-10 px-6 safe-bottom">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-sm text-muted-foreground tracking-wide">
          © {new Date().getFullYear()} César García. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
