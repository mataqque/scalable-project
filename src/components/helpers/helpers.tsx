// sortable
interface InterfaceonSortEnd {
	oldIndex: number;
	newIndex: number;
}
const onSortEnd = async ({ oldIndex, newIndex }: InterfaceonSortEnd) => {
	// const newList = arrayMove(initialValues.items, oldIndex, newIndex);
	// return newList;
};
interface TypeGeneric {
	number: string;
	string: string;
}
export const generateId = ({ type }: { type: string }): number | string => {
	const typeid: TypeGeneric = {
		number: new Date().getTime().toString(),
		string: Math.random().toString(36).substr(2, 18),
	};
	const typeIdDefault: string = typeid.string;
	return typeid[type as keyof TypeGeneric] || typeIdDefault;
};

export const generateUrl = (props: any) => {
	let path = window.location.origin;
	let url = path + props.dir + '/' + props.file_name;
	return url;
};

export const convertToDate = (date: Date) => {
	let date_ = new Date(date);
	return date_.toLocaleDateString('es-Es', { year: 'numeric', month: 'long', day: 'numeric' });
};

export const onChangeInputBoolean = (setter: any, select: any) => {
	setter((prevState: any) => ({
		...prevState,
		[select.target.name]: select.target.checked,
	}));
};
export const onChangeInput = (setter: any, select: any) => {
	setter((prevState: any) => ({
		...prevState,
		[select.target.name]: select.target.value,
	}));
};

export const onChangeOptions = (setter: any, name: any, value: any) => {
	setter((prevState: any) => ({
		...prevState,
		[name]: value,
	}));
};

// function to copy text to clipboard

export const copyToClipboard = (text: string) => {
	try {
		let textarea = document.createElement('textarea') as HTMLTextAreaElement;
		textarea.value = text;
		textarea.style.position = 'fixed';
		textarea.style.top = '0';
		textarea.style.left = '0';
		textarea.style.opacity = '0';
		textarea.style.pointerEvents = 'none';
		document.body.appendChild(textarea);
		textarea.focus();
		textarea.select();
		document.execCommand('copy');
	} catch (error) {
		console.log(error);
	}
};

export const generatePath = (...props: any) => {
	let path = window.location.origin;
	props.map((item: any) => {
		path += '/' + item.replace(/\//, '');
	});
	return path;
};

export const bytesToSize = (bytes: number): string => {
	const sizes = ['Bytes', 'Kb', 'Mb', 'gb', 'Tb'];
	if (bytes === 0) {
		return '0 Byte';
	}
	const i = Math.floor(Math.log(bytes) / Math.log(1024));
	return `${Math.round(bytes / Math.pow(1024, i))} ${sizes[i]}`;
};

export const verifyExtension = (file: any) => {
	let extension = file.file_name.split('.').pop();
	if (extension == 'pdf') {
		return 'file.png';
	} else if (extension == 'mp4') {
		return 'video.png';
	} else if (extension == 'mp3') {
		return 'file.png';
	} else if (
		extension == 'webp' ||
		extension == 'jpg' ||
		extension == 'png' ||
		extension == 'jpeg' ||
		extension == 'gif' ||
		extension == 'svg' ||
		extension == 'PNG' ||
		extension == 'JPG' ||
		extension == 'JPEG' ||
		extension == 'GIF' ||
		extension == 'SVG'
	) {
		return file.compress.length > 0 ? file.compress : file.file_name;
	} else {
		return 'file.png';
	}
};

export const getCheckables = () => {
	const checkboxes: NodeListOf<HTMLInputElement> = document.querySelectorAll('input[type="checkbox"]');
	const values = [];
	for (let i = 0; i < checkboxes.length; i++) {
		if (checkboxes[i].checked) {
			values.push(checkboxes[i].value);
		}
	}
	return values;
};
