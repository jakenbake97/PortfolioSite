---
title: Miscellaneous Work
description: A collection of various projects and tasks I've worked on at SedationKit.
slug: miscellaneous-work
thumbnail: "@assets/Past Work/sedationkit Logo.png"
chips: ["PHP", "WordPress", "JavaScript", "MySQL"]
---

These are some of the smaller internal tools and extensions I created while working on SedationKit. Rather than 
being standalone projects, they were generally created to solve specific workflow or functionality issues we 
encountered. I've grouped them together because each was relatively small, but collectively they represent a 
significant portion of my day-to-day work on the website.

## Admin Payment Link
This plugin added a custom meta-box to the order edit page that allowed the admin to checkout for a manual order. 
This plugin made use of the user switching plugin to allow the admin to checkout as the customer on the WooCommerce 
generated pay-order page. It would also display admin order notes on the pay-order page if the user was an admin 
that was switching to a customer, and not the customer themselves.

## Post Extensions
A plugin that collected extensions to WordPress and WooCommerce post types. 
1. Added a "Partially Shipped" custom order status and set it to be sortable in the orders table. 
2. An admin or manual order extension that updated the WooCommerce JSON search for products to include additional 
   information such as price and inventory counts in the returned results. It also overrode the ajax product search 
   to allow for searching both products and variations by name or sku. Previously, there were issues finding specific product variations using the default search.
3. Extended the products table to include a column for the last purchased date and made it sortable. Then created a 
   batch tool to search through all orders and find the date each product was last purchased. The last purchased date  
   can be seen on both the product edit page and the products table. Also added a simple dropdown filter to sort for 
   featured products on the products table.
4. Extended the Users table to include sortable columns for the registration date and the user's last order date. Then 
   also adds this information to the edit user page.

## Role-Based Discount
Some users on our site were granted a special role, which received a 10% discount on all products. This plugin 
created the role and gave the additive permission for users. It would then update what the user saw on product pages,
the cart, checkout, and invoices. A standard customer would see the normal price, where as a discounted user would 
see each product as if it were on sale, showing "Base Price" and "Your Price" sections. It also checked against an 
item's sale price, offering the discounted price or the sale price, whichever was the best deal for the customer.

## Shipping Extensions
Created custom shipping methods for special products that needed to be shipped separately from standard products. It 
added new shipping classes, which were used to determine the shipping method for those products. We needed separate 
shipping methods for IV fluids, which were shipped at a flat rate per case, Crash Cart shipping, which shipped at a 
flat rate per order, and Pharmaceutical shipping, which offered its own set of shipping options (Next Day, 2 Day, 
Ground, etc.) that could be modified with an additional fee if cold shipping was required.

The shipping methods worked by making use of WooCommerce's order packages, moving items for each shipping class into 
their own package, and then applying the appropriate shipping method to each package. This allowed us to ship products 
that needed to be shipped separately from standard products without having to create separate orders for each 
type of product.

## What This Work Taught Me
Working on these small plugins taught me a lot about extending existing software rather than building everything 
from scratch. WordPress and WooCommerce have extensive hook systems that allow for customization without needing to 
rewrite an entire e-commerce system. These tools allowed me to create business-specific functionality within the 
constraints of the platform. That experience has helped to guide how I approach my own tooling projects, where I try 
to solve the workflow problem without introducing unnecessary complexity.