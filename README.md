# Speech Processing

A comprehensive documentation and implementation project for speech processing techniques.

## Project Structure

This project contains documentation and implementations for various speech processing topics including:

- **Calculus**: Differential equations and mathematical foundations
- **Control Engineering**: Signal processing control systems
- **Implementation**: Practical implementations including cepstrum analysis
- **Logic**: Logical foundations
- **Machine Learning**: Various ML techniques including GANs, VAE, and attention mechanisms
- **Pachouli**: Acoustic wave analysis and signal processing
- **Paper**: Research paper summaries and analysis
- **Processing**: Fourier and Laplace transforms
- **Speech Analysis**: MFCC, cepstrum, and other speech analysis techniques

## Development Setup

This project uses DevContainers for consistent development environment.

### Prerequisites

- **Python 3.10+** (if setting up manually)
- VS Code
- Docker
- Remote - Containers extension for VS Code

### Getting Started

1. Clone the repository
2. Open in VS Code
3. When prompted, click "Reopen in Container" or use Command Palette: "Remote-Containers: Reopen in Container"
4. The development environment will be automatically set up with all dependencies

### Manual Setup (Alternative)

If you prefer to set up the environment manually:

```bash
# Requires Python 3.10 or higher
python --version  # Check your Python version

# Create virtual environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements-dev.txt
```

## Building Documentation

```bash
# Build HTML documentation
make html

# Auto-rebuild on changes
sphinx-autobuild source build/html
```

## Development Tools

The project includes the following development tools:

- **Black**: Code formatting
- **Pylint**: Code linting
- **Flake8**: Style guide enforcement
- **MyPy**: Type checking
- **Pytest**: Testing framework

## License

This project is licensed under the MIT License.
