/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.15.6
 * source: common/verification_policy.proto
 * git: https://github.com/thesayyn/protoc-gen-ts
 * buymeacoffee: https://www.buymeacoffee.com/thesayyn
 *  */
import * as pb_1 from "google-protobuf";
export namespace common.verification_policy {
    export class VerificationPolicy extends pb_1.Message {
        constructor(data?: any[] | {
            securityDomain?: string;
            identifiers?: Identifier[];
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [2], []);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("securityDomain" in data && data.securityDomain != undefined) {
                    this.securityDomain = data.securityDomain;
                }
                if ("identifiers" in data && data.identifiers != undefined) {
                    this.identifiers = data.identifiers;
                }
            }
        }
        get securityDomain() {
            return pb_1.Message.getField(this, 1) as string;
        }
        set securityDomain(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get identifiers() {
            return pb_1.Message.getRepeatedWrapperField(this, Identifier, 2) as Identifier[];
        }
        set identifiers(value: Identifier[]) {
            pb_1.Message.setRepeatedWrapperField(this, 2, value);
        }
        toObject() {
            const data: {
                securityDomain?: string;
                identifiers?: ReturnType<typeof Identifier.prototype.toObject>[];
            } = {};
            if (this.securityDomain != null) {
                data.securityDomain = this.securityDomain;
            }
            if (this.identifiers != null) {
                data.identifiers = this.identifiers.map((item: Identifier) => item.toObject());
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (typeof this.securityDomain === "string" && this.securityDomain.length)
                writer.writeString(1, this.securityDomain);
            if (this.identifiers !== undefined)
                writer.writeRepeatedMessage(2, this.identifiers, (item: Identifier) => item.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): VerificationPolicy {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new VerificationPolicy();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.securityDomain = reader.readString();
                        break;
                    case 2:
                        reader.readMessage(message.identifiers, () => pb_1.Message.addToRepeatedWrapperField(message, 2, Identifier.deserialize(reader), Identifier));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): VerificationPolicy {
            return VerificationPolicy.deserialize(bytes);
        }
    }
    export class Policy extends pb_1.Message {
        constructor(data?: any[] | {
            type?: string;
            criteria?: string[];
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [2], []);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("type" in data && data.type != undefined) {
                    this.type = data.type;
                }
                if ("criteria" in data && data.criteria != undefined) {
                    this.criteria = data.criteria;
                }
            }
        }
        get type() {
            return pb_1.Message.getField(this, 1) as string;
        }
        set type(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get criteria() {
            return pb_1.Message.getField(this, 2) as string[];
        }
        set criteria(value: string[]) {
            pb_1.Message.setField(this, 2, value);
        }
        toObject() {
            const data: {
                type?: string;
                criteria?: string[];
            } = {};
            if (this.type != null) {
                data.type = this.type;
            }
            if (this.criteria != null) {
                data.criteria = this.criteria;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (typeof this.type === "string" && this.type.length)
                writer.writeString(1, this.type);
            if (this.criteria !== undefined)
                writer.writeRepeatedString(2, this.criteria);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Policy {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Policy();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.type = reader.readString();
                        break;
                    case 2:
                        pb_1.Message.addToRepeatedField(message, 2, reader.readString());
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): Policy {
            return Policy.deserialize(bytes);
        }
    }
    export class Identifier extends pb_1.Message {
        constructor(data?: any[] | {
            pattern?: string;
            policy?: Policy;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], []);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("pattern" in data && data.pattern != undefined) {
                    this.pattern = data.pattern;
                }
                if ("policy" in data && data.policy != undefined) {
                    this.policy = data.policy;
                }
            }
        }
        get pattern() {
            return pb_1.Message.getField(this, 1) as string;
        }
        set pattern(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get policy() {
            return pb_1.Message.getWrapperField(this, Policy, 2) as Policy;
        }
        set policy(value: Policy) {
            pb_1.Message.setWrapperField(this, 2, value);
        }
        toObject() {
            const data: {
                pattern?: string;
                policy?: ReturnType<typeof Policy.prototype.toObject>;
            } = {};
            if (this.pattern != null) {
                data.pattern = this.pattern;
            }
            if (this.policy != null) {
                data.policy = this.policy.toObject();
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (typeof this.pattern === "string" && this.pattern.length)
                writer.writeString(1, this.pattern);
            if (this.policy !== undefined)
                writer.writeMessage(2, this.policy, () => this.policy.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Identifier {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Identifier();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.pattern = reader.readString();
                        break;
                    case 2:
                        reader.readMessage(message.policy, () => message.policy = Policy.deserialize(reader));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): Identifier {
            return Identifier.deserialize(bytes);
        }
    }
}
