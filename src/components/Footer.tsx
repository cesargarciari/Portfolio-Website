const Footer = () => {
  return (
    <footer className="bg-background text-foreground py-12 px-6 safe-bottom">
      <div className="max-w-4xl mx-auto text-center">
        <p className="mt-8 text-muted-foreground">
          © {new Date().getFullYear()} César García. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
