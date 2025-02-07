from django.shortcuts import render, redirect
from django.contrib import messages
from .forms import ContactForm

def contact_view(request):
    if request.method == "POST":
        form = ContactForm(request.POST)
        if form.is_valid():
            form.save()
           
            
            messages.success(request, "Your message has been sent successfully!")  # ✅ Store success message
            return redirect("contact")  # Redirect to clear the form
        else:
            messages.error(request, "There was an error. Please check your input.")  # ✅ Store error message

    return render(request, "index.html", {"form": ContactForm()})
