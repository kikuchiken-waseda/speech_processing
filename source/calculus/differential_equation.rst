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

where :math:`x` is the height of the object above the ground, :math:`m`
