============================================
Differntial equation
============================================

https://www.math.hkust.edu.hk/~machas/differential-equations.pdf

写経だから非公開にするかも

Introduction to ordinary differential equations
=================================================
A differntial equation is an equation for a function that relates the values of the function to the values of its derivatives.
An ordinary differntial equation (ode) is a differential equation for a function of a single variable, e.g., :math:`x(t)` , while a partial differntial equation (pde) is a differntial equation for a function of several variables, e.g., :math:`v(x,y,z,t)` .
An ode contains ordinary derivatives and a pde contains partial derivatives.

The simplest type of differential equation
--------------------------------------------------
The simplest ordinary differential equations can be integrated directly by finding antiderivatives. These simplest odes have the form

.. math::
   \frac{d^nx}{dt^n} = G(t), 

where the derivative of :math:`x=x(t)` can be of any order, and the right-hand-side way depend only on the independent variable :math:`t` . As an example, consider a mass falling under the influence of constant gravity, such as appoximately found on the Earth's surface. Newton's law, :math:`F=ma,` results in the equation

.. math::
   m\frac{d^2x}{dt^2} = -mg,

where :math:`x` is the height of the object above the ground, :math:`m` is the mass of the object, and :math:`g` is the constant gravitational acceleration. As Galileo suggested, the mass cannels from the equation, and

.. math::
   \frac{d^2x}{dt^2} = -g.

Here, the right-hand-side of the ode is a constant. The first integration, obtained by antidifferntiation, yields

.. math::
   \frac{dx}{dt} = A - gt,

with :math:`A` the first constant of integration; and the second intergration yields

.. math::
   x = B + At - \frac{1}{2}gt^2,

with :math:`B` the second constant of integration. The two constants of integration :math:`A` and :math:`B` can then be determined from the initial conditions. If we know that the initial height of the mass is :math:`x_0` , and the initial velocith is :math:`v_0` , then the initial conditions are

.. math::
   x(0) = x_0, \frac{dx}{dt}(0) = v_0.

Substitution of these initial conditions into the equations for :math:`{dx}/{dt}` and :math:`x` allows us to solve for :math:`A` and :math:`B` . The unique solution that satisfies both the ode and the initial conditions is given by

.. math::
   x(t) = x_0 + v_0t - \frac{1}{2}gt^2.

First-order differential equations
=================================================

Tge general first-order differential equation for the function :math:`y=y(x)` is written as 

.. math::
   \frac{dy}{dx} = f(x,y),

where :math:`f(x,y)` can be any function of the independent variable :math:`x` and the dependent variable :math:`y` . We first show how to determine a numerical solution of this equation, and then learn techniques for solving analytically some special forms of (2.1), namely, separable and linear first-order equations.

The Euler method
----------------------------
Although it is not always possible to find an analytical solution of (2.1) for :math:`y = y(x)` , it is always possible to determine a unique numerical solution given an initial value :math:`y(x_0) = y_0` ,  and provided :math:`f(x,y)` is a well-behaved function. The differential equation (2.1) gives us the slope :math:`f(x_0,y_0)` of the tangent line to the solution curve :math:`y=y(x)` at the point :math:`(x_0,y_0)` . With a small step size :math:`\Delta x = x_1 - x_0` ,the initial condition :math:`(x_0,y_0)` can be marched forward to :math:`(x_1,y_1)` along the tangent line using Euler's method

.. math::
   y_1 = y_0 + \Delta xf(x_0,y_0).

This solution :math:`(x_1,y_1)` then becomes the new inital condition and is marched forward to :math:`(x_2,y_2)` along a newly determined tangent line with slope given by :math:`f(x_1,y_1)` . For small enough :math:`\Delta x` the numerical solution converges to the exact solution.

Separable equations
----------------------
A first-order ode is separable if it can be written in the form

.. math::
   g(y)\frac{dy}{dx} = f(x), y(x_0)=y_0,

where the function :math:`g(y)` is independent of :math:`x` and :math:`f(x)` is independent of :math: `y` . Integration form :math:`x_0` to :math:`x` results in

.. math::
   \int_{x_0}^{x} g(y(x))y'(x)dx = \int_{x_0}^{x} f(x)dx.

The integral on the left can be transformed by substituting :math:`u=y(x),du=y'(x)dx` , and changing the lower and upper limits of integration to :math:`y(x_0) = y_0` and :math:`y(x)=y` . Therefore,

.. math::
   \int_{y_0}^{y} g(u)du = \int_{x_0}^{x} f(x)dx,

and since :math:`u` is a dummy variable of integration, we can write this in the equivalent form

.. math::
   \int_{y_0}^{y} g(y)dy = \int_{x_0}^{x} f(x)dx.

A simpler procedure that also yields (2.3) is to treat :math:`dy/dx` in (2.2) like a fraction. Multiplying (2.2) by :math:`dx` results in 

.. math::
   g(y)dy = f(x)dx,

which is a separated equation with all the dependent variables on the left-side,and all the independent variables on the right-side. Equation (2.3) then results directly upon integration.

Linear equations
-------------------------
The linear first-order differential equation (linear in :math:`y` and its derivative) can be written in the form 

.. math::
   \frac{dy}{dx} + p(x)y = g(x),

with the inital condition :math:`y(x_0)=y_0` Linear first-order equation can be integrated using an integrating factor :math:`\mu(x)` ,

.. math::
   \mu(x)\left[\frac{dy}{dx}+p(x)y\right] = y(x)g(x),

and try to determine :math:`\mu(x)` so that

.. math::
   \mu(x)\left[\frac{dy}{dx}+p(x)y\right] = -\frac{d}{dx}\left[\mu(x)y\right].

