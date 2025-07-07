# Minimal makefile for Sphinx documentation
#

# You can set these variables from the command line, and also
# from the environment for the first two.

SPHINXOPTS    ?=
SPHINXBUILD  = sphinx-build
SPHINXAUTOBUILD = sphinx-autobuild
SOURCEDIR    = source
BUILDDIR     = build

# Install dependencies
install:
	pip install -r requirements.txt

install-dev:
	pip install -r requirements-dev.txt

# Live HTML build with auto-reload
livehtml:
	@$(SPHINXAUTOBUILD) -b html "$(SOURCEDIR)" $(BUILDDIR)/html

# Put it first so that "make" without argument is like "make help".
help:
	@$(SPHINXBUILD) -M help "$(SOURCEDIR)" "$(BUILDDIR)" $(SPHINXOPTS) $(O)

.PHONY: help Makefile install install-dev livehtml

# Catch-all target: route all unknown targets to Sphinx using the new
# "make mode" option.  $(O) is meant as a shortcut for $(SPHINXOPTS).
%: Makefile
	@$(SPHINXBUILD) -M $@ "$(SOURCEDIR)" "$(BUILDDIR)" $(SPHINXOPTS) $(O)
