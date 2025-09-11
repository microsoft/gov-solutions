
import shutil
import os
import sys

def ensure_dir(path):
    os.makedirs(path, exist_ok=True)

def copy_and_replace(src, dst, replacements):
    if not os.path.exists(dst):
        shutil.copyfile(src, dst)
        # Replace placeholders in the copied file
        with open(dst, 'r', encoding='utf-8') as f:
            content = f.read()
        for key, value in replacements.items():
            content = content.replace(key, value)
        with open(dst, 'w', encoding='utf-8') as f:
            f.write(content)

def main():

    module = input("Enter the module name (use hyphens for spaces, e.g., 'data-analytics'): ").strip()
    module_title = module.replace('-', ' ').title()
    version = "v1.0.0.0"

    # Template paths
    base_dir = os.path.dirname(os.path.abspath(__file__))
    app_starter_kit_template = os.path.join(base_dir, '../_app_starter_kits/_template.md')
    app_release_template = os.path.join(base_dir, '../_app_releases/_template.md')
    data_model_template = os.path.join(base_dir, '../_data_models/_template.md')
    data_model_release_template = os.path.join(base_dir, '../_data_model_releases/_template.md')

    # Output paths
    app_starter_kit_md = os.path.join(base_dir, f"../_app_starter_kits/{module}.md")
    app_release_dir = os.path.join(base_dir, f"../_app_releases/{module}")
    app_release_md = os.path.join(app_release_dir, f"{version}.md")
    data_model_md = os.path.join(base_dir, f"../_data_models/{module}.md")
    data_model_release_dir = os.path.join(base_dir, f"../_data_model_releases/{module}")
    data_model_release_md = os.path.join(data_model_release_dir, f"{version}.md")
    docs_dir = os.path.join(base_dir, f"../_docs/{module}")
    assets_app_starter_kit_dir = os.path.join(base_dir, f"../assets/app-starter-kits/{module}")
    assets_data_models_dir = os.path.join(base_dir, f"../assets/data_models/{module}")

    # Create App Starter Kit
    thumbnail_path = f"/assets/use_cases/{module}.png"
    copy_and_replace(app_starter_kit_template, app_starter_kit_md, {
        '<Module Name>': module_title,
        '<Short description of the module>': f'Placeholder for {module_title} module.',
        '<version>': version,
        '<path-to-thumbnail>': thumbnail_path,
        '<data-model-name>': module,
        '<use-case-name>': '',
    })

    # Create App Release
    ensure_dir(app_release_dir)
    module_proper = '-'.join([w.capitalize() for w in module.split('-')])
    default_release_file = f"MS-Fed-{module_proper}_managed%20-%201.0.0.0.zip"
    copy_and_replace(app_release_template, app_release_md, {
        '<Module Name>': module_title,
        '<version>': version,
        '<Short description of the release>': f'Initial release for {module_title}.',
        '<module-name>': module,
        '<release-file.zip>': default_release_file,
        '<date>': '',
        '<Release notes or features>': 'Initial placeholder release.'
    })

    # Create Data Model
    copy_and_replace(data_model_template, data_model_md, {
        '<Module Name>': module_title,
        '<Short description of the data model>': f'Placeholder for {module_title} data model.',
        '<path-to-thumbnail>': thumbnail_path,
        '<version>': version,
        '<use-case-name>': '',
        '<persona-name>': '',
    })

    # Create Data Model Release
    ensure_dir(data_model_release_dir)
    data_model_release_title = f"Gov {module_title} Data Model {version}"
    data_model_release_file = f"MSGov-DataModels-{module_proper}_managed%20-%201.0.0.0.zip"
    copy_and_replace(data_model_release_template, data_model_release_md, {
        'Gov MODULE Data Model vx.x.x.x': data_model_release_title,
        'MSGov-DataModels-MODULE_managed%20-%20x.x.x.x.zip': data_model_release_file,
        'MODULE': module,  # for parent key
        'vx.x.x.x': version,
        'MMM-DD, YYYY': '',
        'Component': 'Component',
        'Description of change to component': 'Initial placeholder release.'
    })

    # Create Docs and Assets directories
    ensure_dir(docs_dir)
    ensure_dir(assets_app_starter_kit_dir)
    ensure_dir(assets_data_models_dir)
    
    print(f"Module '{module}' structure created.")

if __name__ == "__main__":
    main()
