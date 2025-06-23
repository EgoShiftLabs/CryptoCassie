// HunyuanVideo Integration for Crypto Cassie

// HunyuanVideo configuration and setup instructions
const HUNYUAN_CONFIG = {
    githubRepo: "https://github.com/Tencent/HunyuanVideo",
    documentation: "https://github.com/Tencent/HunyuanVideo/blob/main/README.md",
    requirements: {
        python: "3.8+",
        cuda: "11.8+",
        memory: "16GB+ RAM recommended",
        storage: "50GB+ free space"
    },
    setupSteps: [
        "Clone the HunyuanVideo repository",
        "Install Python dependencies",
        "Download model weights",
        "Configure CUDA environment",
        "Run setup verification"
    ]
};

// Export format configurations
const EXPORT_FORMATS = {
    txt: {
        extension: ".txt",
        mimeType: "text/plain",
        description: "Plain text format for direct copy-paste"
    },
    json: {
        extension: ".json",
        mimeType: "application/json",
        description: "Structured JSON format with metadata"
    }
};

// Initialize HunyuanVideo integration
document.addEventListener('DOMContentLoaded', function() {
    setupHunyuanIntegration();
});

function setupHunyuanIntegration() {
    setupExportButtons();
    setupInstructionModals();
    setupDownloadHandlers();
}

// Setup export buttons
function setupExportButtons() {
    const exportButtons = document.querySelectorAll('[id*="exportHunyuan"], [id*="exportDarkHunyuan"]');
    
    exportButtons.forEach(button => {
        if (!button.onclick) {
            button.addEventListener('click', handleHunyuanExport);
        }
    });
}

// Setup instruction modals
function setupInstructionModals() {
    // Create instruction modal if it doesn't exist
    if (!document.getElementById('hunyuanInstructionsModal')) {
        createHunyuanInstructionsModal();
    }
}

// Setup download handlers
function setupDownloadHandlers() {
    // This will be called when download buttons are created dynamically
}

// Handle HunyuanVideo export
function handleHunyuanExport(event) {
    const button = event.target;
    const isAfterDark = button.id.includes('Dark');
    
    let promptText;
    if (isAfterDark) {
        promptText = document.getElementById('generatedDarkPrompt')?.textContent;
    } else {
        promptText = document.getElementById('generatedPrompt')?.textContent;
    }
    
    if (!promptText || promptText.includes('Click "Generate')) {
        alert('Please generate a prompt first before exporting.');
        return;
    }
    
    // Prepare export data
    const exportData = prepareExportData(promptText, isAfterDark);
    
    // Store for download
    window.currentHunyuanExport = exportData;
    
    // Show appropriate modal
    if (isAfterDark) {
        handleAfterDarkHunyuanExport();
    } else {
        showHunyuanModal();
    }
}

// Prepare export data
function prepareExportData(promptText, isAfterDark = false) {
    const timestamp = new Date().toISOString();
    const characterInfo = "Crypto Cassie - Consistent AI Character";
    
    const exportData = {
        metadata: {
            character: "Crypto Cassie",
            timestamp: timestamp,
            version: "1.0",
            type: isAfterDark ? "after-dark" : "standard",
            platform: "HunyuanVideo",
            contentWarning: isAfterDark ? "18+ Mature Content" : null
        },
        prompt: {
            full: promptText,
            character: characterInfo,
            instructions: "Use this prompt with HunyuanVideo for consistent character generation"
        },
        setup: {
            repository: HUNYUAN_CONFIG.githubRepo,
            requirements: HUNYUAN_CONFIG.requirements,
            steps: HUNYUAN_CONFIG.setupSteps
        }
    };
    
    return exportData;
}

// Show HunyuanVideo modal
function showHunyuanModal() {
    const modal = document.getElementById('hunyuanModal');
    if (modal) {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        
        // Setup download button
        setupModalDownloadButton();
    }
}

// Setup modal download button
function setupModalDownloadButton() {
    const downloadBtn = document.getElementById('downloadPromptBtn');
    if (downloadBtn && window.currentHunyuanExport) {
        downloadBtn.onclick = () => {
            downloadHunyuanPrompt('txt');
        };
    }
}

// Download HunyuanVideo prompt
function downloadHunyuanPrompt(format = 'txt') {
    if (!window.currentHunyuanExport) {
        alert('No prompt data available for download.');
        return;
    }
    
    const exportData = window.currentHunyuanExport;
    const timestamp = new Date().toISOString().slice(0, 19).replace(/:/g, '-');
    const isAfterDark = exportData.metadata.type === 'after-dark';
    
    let content, filename;
    
    if (format === 'txt') {
        content = generateTextExport(exportData);
        filename = `crypto-cassie${isAfterDark ? '-after-dark' : ''}-hunyuan-prompt-${timestamp}.txt`;
    } else if (format === 'json') {
        content = JSON.stringify(exportData, null, 2);
        filename = `crypto-cassie${isAfterDark ? '-after-dark' : ''}-hunyuan-export-${timestamp}.json`;
    }
    
    if (content && filename) {
        CryptoCassie.downloadFile(content, filename, EXPORT_FORMATS[format].mimeType);
    }
}

// Generate text export format
function generateTextExport(exportData) {
    let content = "";
    
    // Header
    content += "=".repeat(60) + "\n";
    content += "CRYPTO CASSIE - HUNYUANVIDEO PROMPT EXPORT\n";
    content += "=".repeat(60) + "\n\n";
    
    // Metadata
    content += "EXPORT INFORMATION:\n";
    content += "-".repeat(20) + "\n";
    content += `Character: ${exportData.metadata.character}\n`;
    content += `Export Date: ${new Date(exportData.metadata.timestamp).toLocaleString()}\n`;
    content += `Version: ${exportData.metadata.version}\n`;
    content += `Type: ${exportData.metadata.type}\n`;
    
    if (exportData.metadata.contentWarning) {
        content += `Content Warning: ${exportData.metadata.contentWarning}\n`;
    }
    
    content += "\n";
    
    // Main prompt
    content += "HUNYUANVIDEO PROMPT:\n";
    content += "-".repeat(20) + "\n";
    content += exportData.prompt.full + "\n\n";
    
    // Setup instructions
    content += "HUNYUANVIDEO SETUP INSTRUCTIONS:\n";
    content += "-".repeat(35) + "\n";
    content += `Repository: ${exportData.setup.repository}\n\n`;
    
    content += "System Requirements:\n";
    Object.entries(exportData.setup.requirements).forEach(([key, value]) => {
        content += `- ${key.charAt(0).toUpperCase() + key.slice(1)}: ${value}\n`;
    });
    
    content += "\nSetup Steps:\n";
    exportData.setup.steps.forEach((step, index) => {
        content += `${index + 1}. ${step}\n`;
    });
    
    content += "\n";
    
    // Usage instructions
    content += "USAGE INSTRUCTIONS:\n";
    content += "-".repeat(20) + "\n";
    content += "1. Copy the prompt text above\n";
    content += "2. Paste it into your HunyuanVideo interface\n";
    content += "3. Adjust generation parameters as needed\n";
    content += "4. Start video generation\n";
    content += "5. Wait for processing to complete\n\n";
    
    // Character consistency note
    content += "CHARACTER CONSISTENCY NOTE:\n";
    content += "-".repeat(25) + "\n";
    content += "This prompt is designed to maintain Crypto Cassie's consistent\n";
    content += "appearance and personality across all generated content.\n";
    content += "Do not modify the character description portions.\n\n";
    
    // Footer
    content += "=".repeat(60) + "\n";
    content += "Generated by Crypto Cassie Web App\n";
    content += "For more information, visit the project repository\n";
    content += "=".repeat(60) + "\n";
    
    return content;
}

// Create HunyuanVideo instructions modal
function createHunyuanInstructionsModal() {
    const modal = document.createElement('div');
    modal.id = 'hunyuanInstructionsModal';
    modal.className = 'modal';
    modal.style.cssText = 'display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.8); z-index: 2000; align-items: center; justify-content: center;';
    
    modal.innerHTML = `
        <div class="modal-content" style="background: var(--white); border-radius: var(--radius-lg); padding: var(--spacing-2xl); max-width: 800px; margin: var(--spacing-md); max-height: 80vh; overflow-y: auto;">
            <div class="modal-header" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: var(--spacing-lg);">
                <h3>🎥 HunyuanVideo Setup Guide</h3>
                <button onclick="hideHunyuanInstructionsModal()" style="background: none; border: none; font-size: 1.5rem; cursor: pointer;">&times;</button>
            </div>
            
            <div class="modal-body">
                <div style="background: var(--light); padding: var(--spacing-lg); border-radius: var(--radius-md); margin-bottom: var(--spacing-lg);">
                    <h4>📋 System Requirements</h4>
                    <ul style="margin: var(--spacing-md) 0; padding-left: var(--spacing-lg);">
                        <li><strong>Python:</strong> ${HUNYUAN_CONFIG.requirements.python}</li>
                        <li><strong>CUDA:</strong> ${HUNYUAN_CONFIG.requirements.cuda}</li>
                        <li><strong>Memory:</strong> ${HUNYUAN_CONFIG.requirements.memory}</li>
                        <li><strong>Storage:</strong> ${HUNYUAN_CONFIG.requirements.storage}</li>
                    </ul>
                </div>
                
                <div style="background: var(--light); padding: var(--spacing-lg); border-radius: var(--radius-md); margin-bottom: var(--spacing-lg);">
                    <h4>🔧 Installation Steps</h4>
                    <ol style="margin: var(--spacing-md) 0; padding-left: var(--spacing-lg);">
                        ${HUNYUAN_CONFIG.setupSteps.map(step => `<li>${step}</li>`).join('')}
                    </ol>
                </div>
                
                <div style="background: var(--light); padding: var(--spacing-lg); border-radius: var(--radius-md); margin-bottom: var(--spacing-lg);">
                    <h4>🚀 Quick Start Commands</h4>
                    <div class="code-block">
                        <code>
# Clone repository
git clone ${HUNYUAN_CONFIG.githubRepo}
cd HunyuanVideo

# Install dependencies
pip install -r requirements.txt

# Download models (follow repo instructions)
python download_models.py

# Run inference
python inference.py --prompt "your_prompt_here"
                        </code>
                    </div>
                </div>
                
                <div style="background: var(--light); padding: var(--spacing-lg); border-radius: var(--radius-md);">
                    <h4>📚 Additional Resources</h4>
                    <ul style="margin: var(--spacing-md) 0; padding-left: var(--spacing-lg);">
                        <li><a href="${HUNYUAN_CONFIG.githubRepo}" target="_blank">Official GitHub Repository</a></li>
                        <li><a href="${HUNYUAN_CONFIG.documentation}" target="_blank">Documentation</a></li>
                        <li><a href="${HUNYUAN_CONFIG.githubRepo}/issues" target="_blank">Community Support</a></li>
                    </ul>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
}

// Hide HunyuanVideo instructions modal
function hideHunyuanInstructionsModal() {
    const modal = document.getElementById('hunyuanInstructionsModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    }
}

// Show HunyuanVideo instructions
function showHunyuanInstructions() {
    const modal = document.getElementById('hunyuanInstructionsModal');
    if (modal) {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
}

// Validate prompt for HunyuanVideo compatibility
function validatePromptForHunyuan(promptText) {
    const issues = [];
    
    // Check prompt length
    if (promptText.length > 2000) {
        issues.push("Prompt may be too long for optimal generation");
    }
    
    // Check for character consistency
    if (!promptText.includes("Crypto Cassie")) {
        issues.push("Character name not found in prompt");
    }
    
    // Check for basic character description
    if (!promptText.includes("Black American woman")) {
        issues.push("Character description may be incomplete");
    }
    
    return {
        isValid: issues.length === 0,
        issues: issues
    };
}

// Generate prompt optimization suggestions
function generateOptimizationSuggestions(promptText) {
    const suggestions = [];
    
    // Length optimization
    if (promptText.length > 1500) {
        suggestions.push("Consider shortening the prompt for faster generation");
    }
    
    // Detail optimization
    if (!promptText.includes("lighting")) {
        suggestions.push("Add lighting details for better visual quality");
    }
    
    if (!promptText.includes("camera")) {
        suggestions.push("Include camera angle suggestions for better framing");
    }
    
    return suggestions;
}

// Export utility functions
function exportPromptAsJSON(promptData) {
    const jsonData = {
        ...promptData,
        exportFormat: "HunyuanVideo JSON",
        compatibility: validatePromptForHunyuan(promptData.prompt.full),
        suggestions: generateOptimizationSuggestions(promptData.prompt.full)
    };
    
    return JSON.stringify(jsonData, null, 2);
}

// Export functions for global access
window.showHunyuanInstructions = showHunyuanInstructions;
window.hideHunyuanInstructionsModal = hideHunyuanInstructionsModal;
window.downloadHunyuanPrompt = downloadHunyuanPrompt;

// Export module for other scripts
window.HunyuanIntegration = {
    validatePrompt: validatePromptForHunyuan,
    generateSuggestions: generateOptimizationSuggestions,
    exportAsJSON: exportPromptAsJSON,
    downloadPrompt: downloadHunyuanPrompt,
    showInstructions: showHunyuanInstructions
};

