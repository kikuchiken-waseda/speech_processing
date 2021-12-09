# Minimal makefile for Sphinx documentation
#

# You can set these variables from the command line, and also
# from the environment for the first two.

#SPHINX_ROOTにbuildするための環境を設定する。
if [-d .venv]; then\
	SPHINX_ROOT = ./.venv;\
fi

SPHINXOPTS    ?=
SPHINXBUILD = $(SPHINX_ROOT)/bin/sphinx-build
SPHINXAUTOBUILD = $(SPHINX_ROOT)/bin/sphinx-autobuild
SOURCEDIR = source
BUILDDIR = build

livehtml:
	@$(SPHINXAUTOBUILD) -b html "$(SOURCEDIR)" $(BUILDDIR)/html

# Put it first so that "make" without argument is like "make help".
help:
	@$(SPHINXBUILD) -M help "$(SOURCEDIR)" "$(BUILDDIR)" $(SPHINXOPTS) $(O)

.PHONY: help Makefile

# Catch-all target: route all unknown targets to Sphinx using the new
# "make mode" option.  $(O) is meant as a shortcut for $(SPHINXOPTS).
%: Makefile
	@$(SPHINXBUILD) -M $@ "$(SOURCEDIR)" "$(BUILDDIR)" $(SPHINXOPTS) $(O)
